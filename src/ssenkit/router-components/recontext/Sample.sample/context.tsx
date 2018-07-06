import produce from 'immer';
import * as React from 'react';
import * as Recontext from 'recontext';
import { init } from './actions';
import { Test, updateX, updateY } from './data';

type ContextState = Recontext.ContextState<{
  a: number;
  b: number;
  c: number;
  updateA: (a: number) => void;
  updateB: (b: number) => void;
  test: Test;
  updateX: (x: number) => void;
  updateY: (y: number) => void;
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
        test: {
          x: 10,
          y: 20,
          z: 30,
        },
        updateX: this.bindReducer(({test}) => test)(updateX)(test => ({test})),
        updateY: this.bindReducer(({test}) => test)(updateY)(test => ({test})),
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
};