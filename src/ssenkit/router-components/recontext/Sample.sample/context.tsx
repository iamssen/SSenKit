import produce from 'immer';
import * as React from 'react';
import * as Recontext from 'recontext';
import { init } from './actions';
import { test } from './data';

type ContextState = Recontext.ContextState<{
  a: number;
  b: number;
  c: number;
  updateA: (a: number) => void;
  updateB: (b: number) => void;
  test: test.Store;
}>;

// @ts-ignore
const {Provider: ReactProvider, Consumer} = React.createContext<ContextState>();

class Provider extends Recontext.Provider<ContextState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      contextState: {
        a: 1,
        b: 2,
        c: 3,
        updateA: this.updateA,
        updateB: this.updateB,
        dispatch: this.dispatch,
        subscribe: this.subscribe,
        test: test.createStore(this, {
          x: 10,
          y: 20,
          z: 30,
        }),
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
  
  componentDidMount() {
    this.dispatch(init());
  }
  
  updateA = (a: number) => {
    this.setContextState(({b}) => {
      return {
        a,
        c: a + b,
      };
    });
  };
  
  updateB = (b: number) => {
    this.setState({
      contextState: produce(this.state.contextState, draft => {
        draft.b = b;
        draft.c = draft.a + b;
      }),
    });
  };
}

function withConsumer<Props>(Component: React.ComponentType<Props>): React.ComponentType<Props & ContextState> {
  return class extends React.PureComponent<Props & ContextState> {
    render() {
      return (
        <Consumer>
          {
            state => <Component {...state} {...this.props}/>
          }
        </Consumer>
      );
    }
  };
}

export {
  Provider,
  Consumer,
  withConsumer,
  ContextState,
};