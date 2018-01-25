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

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'Component9929265';
  
  private input: HTMLInputElement;
  
  static defaultProps: Partial<Props> = {
    children: <input type="text"/>,
  };
  
  render() {
    return React.cloneElement(this.props.children, {
      ref: r => this.input = r,
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
    const selectAll: boolean = event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true);
    
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
  
  componentWillReceiveProps(nextProps: Readonly<Props>) {
    if (this.input && this.input.value !== nextProps.value) {
      this.input.value = nextProps.value;
    }
  }
  
  //get text(): string {
  //  return this.input.value;
  //}
  //
  //set text(value: string) {
  //  if (this.input) {
  //    this.input.value = value;
  //    this.props.onChange(value);
  //  }
  //}
}

export default Component as React.ComponentClass<Props>;