import produce from 'immer';

export interface Test {
  x: number;
  y: number;
  z: number;
}

export const updateX: (test: Test) => (x: number) => Test = test => x => {
  return produce(test, draft => {
    draft.x = x;
    draft.z = x + draft.y;
  });
};

export const updateY: (test: Test) => (y: number) => Test = test => y => {
  return produce(test, draft => {
    draft.y = y;
    draft.z = draft.x + y;
  });
};