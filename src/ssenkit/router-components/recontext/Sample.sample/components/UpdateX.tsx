import * as React from 'react';
import { ContextState, withConsumer } from '../context';

export interface Props {
}

interface InternalProps extends ContextState {
}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'UpdateX';
  
  render() {
    return (
      <div>
        <button onClick={this.update}>
          Update X
        </button>
      </div>
    );
  }
  
  update = () => {
    this.props.test.updateX(Math.floor(Math.random() * 10000));
  };
}

export default withConsumer<Props>(Component) as React.ComponentType<Props>;