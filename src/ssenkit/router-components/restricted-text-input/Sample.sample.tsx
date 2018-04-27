import * as React from 'react';
import RestrictedTextInput from 'ssenkit.restricted-text-input';

export interface Props {

}

interface InternalProps {

}

interface State {
  text: string;
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'Sample.sample';
  
  state: State = {
    text: '',
  };
  
  render() {
    return (
      <div>
        <RestrictedTextInput availableCharacterPattern={/[abcd0-9]/}
                             value={this.state.text}
                             onChange={this.onChange}
                             onSubmit={this.onSubmit}/>
        <hr/>
        {this.state.text}
      </div>
    );
  }
  
  onChange = (text: string) => {
    this.setState({
      text,
    });
  };
  
  onSubmit = (text: string) => {
    this.setState({
      text,
    });
  };
}

export default Component as React.ComponentType<Props>;