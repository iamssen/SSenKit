import * as React from 'react';

export type Teardown = () => void;
export type Action<ContextState> = (contextState: ContextState) => (Teardown | void);
export type Subscription<ContextState> = (state: ContextState, prevState: ContextState) => void;

export type ContextState<T> = T & {
  dispatch: (action: Action<ContextState<T>>) => Teardown;
  subscribe: (subscription: (state: ContextState<T>, prevState: ContextState<T>) => void) => Teardown;
}

export class Provider<ContextState, Props = {}, State = {}> extends React.Component<Props, State & {contextState: ContextState}> {
  static displayName: string = 'Recontext.Provider';
  
  private teardowns: Set<Teardown> = new Set;
  private subscriptions: Set<Subscription<ContextState>> = new Set;
  
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State & {contextState: ContextState}>) {
    if (prevState.contextState !== this.state.contextState && this.subscriptions.size > 0) {
      for (const subscription of this.subscriptions) {
        subscription(this.state.contextState, prevState.contextState);
      }
    }
  }
  
  componentWillUnmount() {
    for (const teardown of this.teardowns) {
      teardown();
    }
    
    this.teardowns.clear();
    this.subscriptions.clear();
  }
  
  protected setContextState = (stateOrProducer: Partial<ContextState> | ((contextState: ContextState) => Partial<ContextState>)) => {
    this.setState({
      contextState: Object.assign(
        {},
        this.state.contextState,
        typeof stateOrProducer === 'function'
          ? stateOrProducer(this.state.contextState)
          : stateOrProducer,
      ),
    });
  };
  
  protected dispatch: (action: Action<ContextState>) => Teardown = action => {
    const teardown: Teardown | void = action(this.state.contextState);
    
    if (typeof teardown === 'function') {
      let broken: boolean = false;
      
      this.teardowns.add(teardown);
      
      return () => {
        if (!broken && this.teardowns.has(teardown)) {
          teardown();
          this.teardowns.delete(teardown);
        }
        broken = true;
      };
    } else {
      return () => {
        // blank teardown
      };
    }
  };
  
  protected subscribe: (subscription: (state: ContextState, prevState: ContextState) => void) => Teardown = subscription => {
    if (!this.subscriptions.has(subscription)) {
      this.subscriptions.add(subscription);
    }
    
    return () => {
      this.subscriptions.delete(subscription);
    };
  };
  
  // tslint:disable
  updateStore = (prevStore, nextStore) => {
    const key: string | undefined = Object.keys(this.state.contextState).find(key => {
      return prevStore === this.state.contextState[key];
    });
    
    if (key) {
      this.setState({
        contextState: Object.assign(
          {},
          this.state.contextState,
          {[key]: nextStore},
        ),
      });
    }
  };
  // tslint:enable
}

export type CreateStore<State, Actions> = (provider: Provider<{}>, initialState?: Partial<State>) => State & Actions;

export type ActionsInput<State, Actions> = {
  [A in keyof Actions]: (state: State) => Actions[A];
}

export function createStore<State, Actions>(defaultInitialState: State, config: (setState: (state: Partial<State>) => State & Actions) => ActionsInput<State, Actions>): CreateStore<State, Actions> {
  return (provider, initialState) => {
    let state: State = Object.assign({}, defaultInitialState, initialState || {});
    let store: State & Actions;
    let actionsInput: ActionsInput<State, Actions>;
    
    function createActions(state: State): Actions {
      return Object.keys(actionsInput).reduce((actions, key) => {
        actions[key] = actionsInput[key](state);
        return actions;
      }, {}) as Actions;
    }
    
    function setState(update: Partial<State>): State & Actions {
      const nextState: State = Object.assign({}, state, update);
      const nextActions: Actions = createActions(nextState);
      
      const prevStore: State & Actions = store;
      const nextStore: State & Actions = Object.assign({}, nextState, nextActions);
      
      provider.updateStore(prevStore, nextStore);
      state = nextState;
      store = nextStore;
      
      return nextStore;
    }
    
    actionsInput = config(setState);
    
    store = Object.assign({}, state, createActions(state));
    
    return store;
  };
}
