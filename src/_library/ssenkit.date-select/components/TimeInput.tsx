import { range } from 'd3-array';
import * as React from 'react';

const availableKeyCodes: number[] = [
  ...range(35, 40 + 1), // arrow keys
  8, // backspace
  46, // delete
  9, // tab
  27, // escape
  13, // enter
  ...range(48, 57 + 1), // number keys
  ...range(96, 105 + 1), // numpad keys
  186, // semi colon
];

export interface Props {
  className?: string;
  time: string; // of "HH:mm:ss"
  onChange: (time: string) => void;
}

export interface State {
  timeString?: string;
}

export default class extends React.Component<Props, State> {
  private input: HTMLInputElement;
  
  static defaultProps: object = {
    className: '',
  };
  
  state: State = {
    timeString: '00:00:00',
  };
  
  render() {
    return (
      <input ref={r => this.input = r}
             type="text"
             className={'TimeInput form-control' + this.props.className}
             defaultValue={this.state.timeString}
             onBlur={this.onBlur}
             onKeyDown={this.onKeyDown}/>
    );
  }
  
  onBlur = (event: React.FocusEvent<{value: string}>) => {
    this.commitString(this.state.timeString, event.currentTarget.value);
  };
  
  onKeyDown = (event: React.KeyboardEvent<{value: string}>) => {
    if (event.keyCode === 13) {
      this.commitString(this.state.timeString, event.currentTarget.value);
      return;
    }
    const selectAll: boolean = event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true);
    if (selectAll || availableKeyCodes.indexOf(event.keyCode) !== -1) return;
    event.preventDefault();
  };
  
  private commitString(prevTimeString: string, nextTimeString: string) {
    if (prevTimeString === nextTimeString) return;
    
    if (nextTimeString.trim() === '') {
      this.setState({timeString: '00:00:00'});
      this.props.onChange('00:00:00');
      return;
    }
    
    if (!/^([0-9]{2}):([0-9]{2}):([0-9]{2})$/.test(nextTimeString)) {
      this.input.value = prevTimeString;
      return;
    }
    
    const times: string[] = nextTimeString.split(':');
    const HH: number = Number(times[0]);
    const mm: number = Number(times[1]);
    const ss: number = Number(times[2]);
    
    if (!isNaN(HH) && HH >= 0 && HH < 24
      && !isNaN(mm) && mm >= 0 && HH < 60
      && !isNaN(ss) && ss >= 0 && ss < 60
    ) {
      this.setState({timeString: nextTimeString});
      this.props.onChange(nextTimeString);
    } else {
      this.input.value = prevTimeString;
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
    
    if (prevProps.time !== nextProps.time) {
      state.timeString = nextProps.time;
      if (this.input) this.input.value = nextProps.time;
      changed = true;
    }
    
    if (changed) {
      this.setState(state);
    }
  }
}