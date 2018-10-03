import { ContextState } from '../context';

export default (b: number) => ({mobx}: ContextState) => {
  mobx.updateB(b);
}