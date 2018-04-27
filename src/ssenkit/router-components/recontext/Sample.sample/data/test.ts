import * as Recontext from 'recontext';

module test {
  interface State {
    x: number;
    y: number;
    z: number;
  }
  
  interface Actions {
    updateX: (x: number) => void;
    updateY: (y: number) => void;
  }
  
  export type Store = State & Actions;
  
  export const createStore: Recontext.CreateStore<State, Actions> = Recontext.createStore<State, Actions>(
    {
      x: 1,
      y: 2,
      z: 3,
    },
    setState => ({
      updateX: ({y}) => x => {
        setState({
          x,
          z: x + y,
        });
      },
      updateY: ({x}) => y => {
        setState({
          y,
          z: x + y,
        });
      },
    }),
  );
}

export default test;