import { ContextState } from '../context';

export default () => ({b, updateB}: ContextState) => {
  updateB(b + 1);
}