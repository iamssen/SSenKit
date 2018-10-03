import { ContextState } from '../context';

export default (a: number) => ({mobx}: ContextState) => {
  console.log('updateA.ts..()', a);
  mobx.updateA(a);
}