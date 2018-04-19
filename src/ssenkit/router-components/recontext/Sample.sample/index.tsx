import * as React from 'react';
import { Print, UpdateA, UpdateB, UpdateX, UpdateY } from './components';
import { Provider } from './context';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'Sample.sample';
  
  render() {
    return (
      <Provider>
        <Print/>
        <UpdateA/>
        <UpdateB/>
        <UpdateX/>
        <UpdateY/>
      </Provider>
    );
  }
}

export default Component as React.ComponentClass<Props>;