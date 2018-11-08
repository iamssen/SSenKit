import { ContextState } from '../context';

export default (arr: string[]) => ({mobx}: ContextState) => {
  mobx.updateArr(arr);
}