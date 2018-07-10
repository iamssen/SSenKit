# Install

```
npm install recontext --save
```

# Basic usage

## Create a Context

```
import * as React from 'react';
import * as Recontext from 'recontext';
import { init } from './actions';

type ContextState = Recontext.ContextState<{
  a: number;
  b: number;
  c: number;
  updateA: (a: number) => void;
  updateB: (b: number) => void;
}>;

const { Provider: ReactProvider, Consumer } = React.createContext<ContextState>();

class Provider extends Recontext.Provider<ContextState> {
  constructor(props) {
    super(props);

    // initialize states
    this.state = {
      contextState: {
        a: 1,
        b: 2,
        c: 3,
        updateA: this.updateA,
        updateB: this.updateB,
        dispatch: this.dispatch,
        subscribe: this.subscribe,
      }
    }
  }

  render() {
    return (
      <ReactProvider value={this.state.contextState}>
        {this.props.children}
      </ReactProvider>
    )
  }

  componentDidMount() {
    // execute initialize action
    this.dispatch(init());
  }

  // actions
  updateA = (a: number) => {
    this.setContextState(({b}) => {
      return {
        a,
        c: a + b,
      }
    })
  }

  updateB = (b: number) => {
    this.setContextState(({a}) => {
      return {
        b,
        c: a + b,
      }
    })
  }
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
}
```

## Create Actions

```
// actions/updateB.ts
import { ContextState } from '../context';

export default () => ({b, updateB}: ContextState) => {
  updateB(b + 1);
}
```

```
// actions/init.ts
import { ContextState } from '../context'

export default () => ({subscribe}: ContextState) => {
  const unsubscribe: () => void = subscribe((state, prevState) => {
    if (state.a !== prevState.a) {
      console.log(`Changed a: ${prevState.a} → ${state.a}`);
    }
  });

  return () => {
    console.log('Destroy subscribed action');
    unsubscribe();
  }
}
```

## Create Components

```
// components/Print.tsx
import * as React from 'react';
import { Consumer } from '../context';

export default () => {
  return (
    <Consumer>
      {
        ({a, b, c}) => (
          <div>
            {a} + {b} = {c}
          </div>
        )
      }
    </Consumer>
  );
}
```

```
// components/UpdateA.tsx
import * as React from 'react';
import { ContextState, withConsumer } from '../context';

export interface Props {
}

interface InternalProps extends ContextState {
}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'UpdateA';

  render() {
    return (
      <div>
        <button onClick={this.updateA}>
          Update A
        </button>
      </div>
    );
  }

  updateA = () => {
    this.props.updateA(Math.floor(Math.random() * 10000));
  };
}

export default withConsumer<Props>(Component) as React.ComponentType<Props>;
```

```
// components/UpdateB.tsx
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
```

## Assemble

```
import * as React from 'react';
import { Print, UpdateA, UpdateB } from './components';
import { Provider } from './context';

export default () => {
  return (
    <Provider>
      <Print/>
      <UpdateA/>
      <UpdateB/>
    </Provider>
  );
}
```