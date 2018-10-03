import { MobX } from './data';
import * as React from 'react';
import * as Recontext from 'recontext';

interface Props {
}

type ContextState = Recontext.ContextState<{
  mobx: MobX;
}>

// @ts-ignore
const {Provider: ReactProvider, Consumer} = React.createContext<ContextState>();

class Provider extends Recontext.Provider<ContextState, Props> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      contextState: {
        dispatch: this.dispatch,
        subscribe: this.subscribe,
        mobx: new MobX,
      },
    };
  }
  
  render() {
    return (
      <ReactProvider value={this.state.contextState}>
        {this.props.children}
      </ReactProvider>
    );
  }
}

function withConsumer<Props>(Component: React.ComponentType<Props>): React.ComponentType<ContextState & Props> {
  return React.forwardRef((props, ref) => (
    <Consumer>
      {
        state => <Component {...state} {...props} ref={ref}/>
      }
    </Consumer>
  ));
}

export {
  Provider,
  Consumer,
  withConsumer,
  ContextState,
  Props,
};