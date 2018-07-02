import { range } from 'd3-array';
import * as React from 'react';

const availableInputKeyCodes: number[] = [
  ...range(35, 40 + 1), // arrow keys
  8, // backspace
  46, // delete
  9, // tab
  27, // escape
  13, // enter
];

export interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  availableCharacterPattern: RegExp;
  
  children?: JSX.Element;
}

interface InternalProps {

}

interface State {
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'Component9929265';
  
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  //private input: HTMLInputElement;
  
  static defaultProps: Partial<Props> = {
    children: <input type="text"/>,
  };
  
  render() {
    return React.cloneElement(this.props.children as JSX.Element, {
      ref: this.inputRef,
      defaultValue: this.props.value,
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
      onKeyDown: this.onKeyDown,
    });
  }
  
  onChange = (event: React.ChangeEvent<{value: string}>) => {
    this.props.onChange(event.target.value);
  };
  
  onKeyPress = (event: React.KeyboardEvent<{value: string}>) => {
    const selectAll: boolean = event.keyCode === 65 && (event.ctrlKey || event.metaKey);
    
    if (selectAll
      || availableInputKeyCodes.indexOf(event.keyCode) !== -1
      || this.props.availableCharacterPattern.test(String.fromCharCode(event.charCode))
    ) return;
    
    event.preventDefault();
    event.stopPropagation();
  };
  
  onKeyDown = (event: React.KeyboardEvent<{value: string}>) => {
    if (event.keyCode === 13) {
      this.props.onSubmit(event.currentTarget.value);
    }
  };
  
  componentDidUpdate() {
    if (this.inputRef.current && this.inputRef.current.value !== this.props.value) {
      this.inputRef.current.value = this.props.value;
    }
  }
  
  get text(): string {
    return this.inputRef.current
      ? this.inputRef.current.value
      : '';
  }
  
  set text(value: string) {
    if (this.inputRef.current && this.inputRef.current.value !== value) {
      this.inputRef.current.value = value;
      this.props.onChange(value);
    }
  }
}

export default Component;