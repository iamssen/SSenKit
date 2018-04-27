import { range } from 'd3-array';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';

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
  time: string; // of "HH:mm:ss"
  onChange: (time: string) => void;
}

interface InternalProps extends ContextState {
}

interface State {
  time: string; // of "HH:mm:ss
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'TimeInput';
  
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      time: props.time,
    };
  }
  
  render() {
    return (
      <input ref={this.inputRef}
             type="text"
             className={'TimeInput ' + this.props.config.timeInputClassName}
             defaultValue={this.state.time}
             onBlur={this.onBlur}
             onKeyDown={this.onKeyDown}/>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps): Partial<State> {
    return {
      time: nextProps.time,
    };
  }
  
  componentDidUpdate() {
    if (this.inputRef.current && this.inputRef.current.value !== this.state.time) {
      this.inputRef.current.value = this.state.time;
    }
  }
  
  shouldComponentUpdate(nextProps: Readonly<Props & InternalProps>, nextState: Readonly<State>): boolean {
    return this.state.time !== nextState.time;
  }
  
  private onBlur = (event: React.FocusEvent<{value: string}>) => {
    this.commitString(this.state.time, event.currentTarget.value);
  };
  
  private onKeyDown = (event: React.KeyboardEvent<{value: string}>) => {
    if (event.keyCode === 13) {
      this.commitString(this.state.time, event.currentTarget.value);
      return;
    }
    
    const selectAll: boolean = event.keyCode === 65 && (event.ctrlKey || event.metaKey);
    if (selectAll || availableKeyCodes.indexOf(event.keyCode) !== -1) return;
    event.preventDefault();
  };
  
  private commitString(prevTimeString: string, nextTimeString: string) {
    if (prevTimeString === nextTimeString) return;
    
    if (nextTimeString.trim() === '') {
      this.setState({
        time: '00:00:00',
      });
      this.props.onChange('00:00:00');
      return;
    }
    
    if (!/^([0-9]{2}):([0-9]{2}):([0-9]{2})$/.test(nextTimeString)) {
      if (this.inputRef.current) {
        this.inputRef.current.value = prevTimeString;
      }
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
      this.setState({
        time: nextTimeString,
      });
      this.props.onChange(nextTimeString);
    } else {
      if (this.inputRef.current) {
        this.inputRef.current.value = prevTimeString;
      }
    }
  }
}

export default withConsumer(Component) as React.ComponentType<Props>;