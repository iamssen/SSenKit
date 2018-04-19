import { ContextState } from '../context';

export default () => ({subscribe}: ContextState) => {
  const unsubscribe: () => void = subscribe(({a}, prevState) => {
    if (a !== prevState.a) {
      console.log('init.ts..()', a, prevState.a);
    }
  });
  
  return () => {
    console.log('init.ts..() unsubscribe...');
    unsubscribe();
  };
}