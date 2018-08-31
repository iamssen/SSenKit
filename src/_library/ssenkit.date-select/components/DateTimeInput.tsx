import { range } from 'd3-array';
import * as moment from 'moment'
import * as React from 'react';
import { ContextState, withConsumer } from '../context';

const format: string = 'YYYY-MM-DD HH:mm:ss';
const availableKeyCodes: number[] = [
  ...range(35, 40 + 1), // arrow keys
  8, // backspace
  46, // delete
  9, // tab
  27, // escape
  13, // enter
  32, // space
  ...range(48, 57 + 1), // number keys
  ...range(96, 105 + 1), // numpad keys
  186, // semi colon
  190, // decimal point
  110, // decimal point
  189, // dash
];

export interface Props {
  date: moment.Moment | Date;
  onChange: (date: Date) => void;
  
  disableBefore?: moment.Moment | Date;
  disableAfter?: moment.Moment | Date;
}

interface InternalProps extends ContextState {
}

interface State {
  dateString: string;
}

function getFormat(dateString: string): string {
  if (/[0-9]{4}-[0-9]{2}-[0-9]{2}[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(dateString)) {
    return 'YYYY-MM-DDHH:mm:ss';
  } else if (/[0-9]{4}.[0-9]{2}.[0-9]{2}[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(dateString)) {
    return 'YYYY.MM.DDHH:mm:ss';
  } else if (/[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}/.test(dateString)) {
    return 'YYYY/MM/DDHH:mm:ss';
  } else if (/[0-9]{8}[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(dateString)) {
    return 'YYYYMMDDHH:mm:ss';
  }
  return 'YYYY-MM-DDHH:mm:ss';
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'DateTimeInput';
  
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      dateString: moment(props.date).format(format),
    };
  }
  
  render() {
    return (
      <input ref={this.inputRef}
             type="text"
             className={'DateTimeInput ' + this.props.config.dateTimeInputClassName}
             defaultValue={this.state.dateString}
             onBlur={this.onBlur}
             onKeyDown={this.onKeyDown}/>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps): Partial<State> | null {
    return {
      dateString: moment(nextProps.date).format(format),
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
    
    const nextDate: moment.Moment = moment(nextDateString.replace(/\s/g, ''), getFormat(nextDateString), true);
    
    const isBefore: boolean = nextDate.isBefore(this.props.disableBefore || this.props.config.disableBefore);
    const isAfter: boolean = nextDate.isAfter(this.props.disableAfter || this.props.config.disableAfter);
    
    const isValid: boolean = nextDate.isValid && !isBefore && !isAfter;
    
    if (isValid) {
      this.setState({
        dateString: nextDateString,
      });
      this.props.onChange(nextDate.toDate());
    } else {
      if (this.inputRef.current) {
        this.inputRef.current.value = prevDateString;
      }
    }
  }
}

export default withConsumer(Component) as React.ComponentType<Props>;