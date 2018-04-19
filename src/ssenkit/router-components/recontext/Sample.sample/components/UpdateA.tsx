import * as React from 'react';
import { ContextState, withConsumer } from '../context';

export interface Props {
}

interface InternalProps extends ContextState {
}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'UpdateA';
  
  render() {
    return (
      <div>
        <button onClick={this.update}>
          Update A
        </button>
      </div>
    );
  }
  
  update = () => {
    this.props.updateA(Math.floor(Math.random() * 10000));
  };
}

export default withConsumer<Props>(Component) as React.ComponentType<Props>;