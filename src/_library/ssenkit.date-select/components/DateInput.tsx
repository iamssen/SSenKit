import { range } from 'd3-array';
import { DateTime } from 'luxon';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';

const format: string = 'yyyy-LL-dd';
const availableKeyCodes: number[] = [
  ...range(35, 40 + 1), // arrow keys
  8, // backspace
  46, // delete
  9, // tab
  27, // escape
  13, // enter
  ...range(48, 57 + 1), // number keys
  ...range(96, 105 + 1), // numpad keys
  190, // decimal point
  110, // decimal point
  189, // dash
];

export interface Props {
  date: DateTime;
  onChange: (date: DateTime) => void;
  
  disableBefore?: DateTime;
  disableAfter?: DateTime;
}

interface InternalProps extends ContextState {
}

interface State {
  dateString: string;
}

function getFormat(dateString: string): string {
  if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(dateString)) {
    return 'yyyy-LL-dd';
  } else if (/[0-9]{4}.[0-9]{2}.[0-9]{2}/.test(dateString)) {
    return 'yyyy.LL.dd';
  } else if (/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/.test(dateString)) {
    return 'yyyy/LL/dd';
  } else if (/[0-9]{8}/.test(dateString)) {
    return 'yyyyLLdd';
  }
  return 'yyyy-LL-dd';
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'DateInput';
  
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      dateString: props.date.toFormat(format),
    };
  }
  
  render() {
    return (
      <input ref={this.inputRef}
             type="text"
             className={'DateInput ' + this.props.config.dateInputClassName}
             defaultValue={this.state.dateString}
             onBlur={this.onBlur}
             onKeyDown={this.onKeyDown}/>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps): Partial<State> | null {
    return {
      dateString: nextProps.date.toFormat(format),
    };
  }
  
  componentDidUpdate() {
    if (this.inputRef.current && this.inputRef.current.value !== this.state.dateString) {
      this.inputRef.current.value = this.state.dateString;
    }
  }
  
  shouldComponentUpdate(nextProps: Readonly<Props & InternalProps>, nextState: Readonly<State>) {
    return this.state.dateString !== nextState.dateString;
  }
  
  onBlur = (event: React.FocusEvent<{value: string}>) => {
    this.commitString(this.state.dateString, event.currentTarget.value);
  };
  
  onKeyDown = (event: React.KeyboardEvent<{value: string}>) => {
    if (event.keyCode === 13) {
      this.commitString(this.state.dateString, event.currentTarget.value);
      return;
    }
    const selectAll: boolean = event.keyCode === 65 && (event.ctrlKey || event.metaKey);
    if (selectAll || availableKeyCodes.indexOf(event.keyCode) !== -1) return;
    event.preventDefault();
    event.stopPropagation();
  };
  
  private commitString(prevDateString: string, nextDateString: string) {
    if (prevDateString === nextDateString) return;
    
    const nextDate: DateTime = DateTime.fromFormat(nextDateString.replace(/\s/g, ''), getFormat(nextDateString));
    
    const isBefore: boolean = nextDate.startOf('day') < (this.props.disableBefore || this.props.config.disableBefore).startOf('day');
    const isAfter: boolean = nextDate.startOf('day') > (this.props.disableAfter || this.props.config.disableAfter).startOf('day');
    
    const isValid: boolean = nextDate.isValid && !isBefore && !isAfter;
    
    if (isValid) {
      this.setState({
        dateString: nextDateString,
      });
      this.props.onChange(nextDate);
    } else {
      if (this.inputRef.current) {
        this.inputRef.current.value = prevDateString;
      }
    }
  }
}

export default withConsumer(Component) as React.ComponentType<Props>;