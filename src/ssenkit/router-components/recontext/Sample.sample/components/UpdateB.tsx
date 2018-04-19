import * as React from 'react';
import { updateB } from '../actions';
import { ContextState, withConsumer } from '../context';

export interface Props {
}

interface InternalProps extends ContextState {
}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'UpdateB';
  
  render() {
    return (
      <div>
        <button onClick={this.update}>
          Update B
        </button>
      </div>
    );
  }
  
  update = () => {
    this.props.dispatch(updateB());
  };
}

export default withConsumer<Props>(Component) as React.ComponentType<Props>;