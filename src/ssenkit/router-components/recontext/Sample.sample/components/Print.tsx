import * as React from 'react';
import { Consumer } from '../context';

export interface Props {
}

interface InternalProps {
}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'Print';
  
  render() {
    return (
      <Consumer>
        {
          ({a, b, c, test}) => (
            <div>
              <p>
                {a} + {b} = {c}
              </p>
              <p>
                {test.x} + {test.y} = {test.z}
              </p>
            </div>
          )
        }
      </Consumer>
    );
  }
}

export default Component as React.ComponentType<Props>;