import { observer } from 'mobx-react';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';

export interface Props {
}

interface InternalProps extends ContextState {
}

interface State {
}

@observer
class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'Print';
  
  render() {
    return (
      <div>
        {this.props.mobx.a}
        {' '}
        +
        {' '}
        {this.props.mobx.b}
        {' '}
        =
        {' '}
        {this.props.mobx.c}
      </div>
    );
  }
}

export default withConsumer(Component) as React.ComponentType<Props>;