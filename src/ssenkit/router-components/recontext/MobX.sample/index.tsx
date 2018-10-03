import * as React from 'react';
import { Provider } from './context';
import { Form, Print } from './components';

export interface Props {
}

interface InternalProps {
}

interface State {
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'MobX.sample';
  
  render() {
    return (
      <Provider>
        <Form/>
        <Print/>
      </Provider>
    );
  }
}

export default Component as React.ComponentType<Props>;