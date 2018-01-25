import { range } from 'd3-array';
import * as moment from 'moment';
import * as React from 'react';
import isSame from './isSame';

const format: string = 'YYYY-MM-DD';
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
  className?: string;
  
  date: moment.MomentInput;
  onChange: (date: Date) => void;
  
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
}

export interface State {
  dateString?: string;
}

function getFormat(dateString: string): string {
  if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(dateString)) {
    return 'YYYY-MM-DD';
  } else if (/[0-9]{4}.[0-9]{2}.[0-9]{2}/.test(dateString)) {
    return 'YYYY.MM.DD';
  } else if (/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/.test(dateString)) {
    return 'YYYY/MM/DD';
  } else if (/[0-9]{8}/.test(dateString)) {
    return 'YYYYMMDD';
  }
  return 'YYYY-MM-DD';
}

export default class extends React.Component<Props, State> {
  private input: HTMLInputElement;
  
  static defaultProps: Partial<Props> = {
    className: '',
  };
  
  state: State = {
    dateString: '',
  };
  
  render() {
    return (
      <input ref={r => this.input = r}
             type="text"
             className={'DateInput form-control' + this.props.className}
             defaultValue={this.state.dateString}
             onBlur={this.onBlur}
             onKeyDown={this.onKeyDown}/>
    );
  }
  
  onBlur = (event: React.FocusEvent<{value: string}>) => {
    this.commitString(this.state.dateString, event.currentTarget.value);
  };
  
  onKeyDown = (event: React.KeyboardEvent<{value: string}>) => {
    if (event.keyCode === 13) {
      this.commitString(this.state.dateString, event.currentTarget.value);
      return;
    }
    const selectAll: boolean = event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true);
    if (selectAll || availableKeyCodes.indexOf(event.keyCode) !== -1) return;
    event.preventDefault();
    event.stopPropagation();
  };
  
  private commitString(prevDateString: string, nextDateString: string) {
    if (prevDateString === nextDateString) return;
    
    const nextDate: moment.Moment = moment(nextDateString.replace(/\s/g, ''), getFormat(nextDateString), true);
    const isBefore: boolean = this.props.disableBefore && nextDate.isBefore(this.props.disableBefore);
    const isAfter: boolean = this.props.disableAfter && nextDate.isAfter(this.props.disableAfter);
    
    if (nextDate.isValid() && !isBefore && !isAfter) {
      this.setState({dateString: nextDateString});
      this.props.onChange(nextDate.toDate());
    } else {
      this.input.value = prevDateString;
    }
  }
  
  componentWillMount() {
    this.propsToState({} as Props, this.props);
  }
  
  componentWillReceiveProps(nextProps: Props) {
    this.propsToState(this.props, nextProps);
  }
  
  private propsToState(prevProps: Props, nextProps: Props) {
    const state: State = {};
    let changed: boolean = false;
    
    if ((moment.isMoment(nextProps.date) || moment.isDate(nextProps.date)) && !isSame(prevProps.date, nextProps.date, 'day')) {
      const dateString: string = moment(nextProps.date).format(format);
      state.dateString = dateString;
      if (this.input) this.input.value = dateString;
      changed = true;
    }
    
    if (changed) {
      this.setState(state);
    }
  }
}