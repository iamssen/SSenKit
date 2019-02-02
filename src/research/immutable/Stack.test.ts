import { List, Stack } from 'immutable';

// 후입선출 (LIFO) 구조 - 마지막에 들어간게 제일 먼저 나온다
describe('Stack', () => {
  it('Reading values', () => {
    const stack: Stack<number> = Stack<number>([1, 2, 3, 4]);
    
    // Collection.first()와 동일
    expect(stack.peek()).toEqual(1);
  });
  
  it('Persistent changes', () => {
    const stack: Stack<number> = Stack<number>([1, 2, 3, 4]);
    
    expect(stack.clear().size).toEqual(0);
    
    // Stack 구조이기 때문에 push, pushAll, pop은 없는 개념이다
    // 앞대가리로 집어넣고, peek()으로 꺼내거나 shift()로 제거한다
    expect(stack.unshift(5, 6).toJS()).toEqual([5, 6, 1, 2, 3, 4]);
    expect(stack.push(5, 6).toJS()).toEqual([5, 6, 1, 2, 3, 4]);
    
    expect(stack.unshiftAll(List<number>([5, 6])).toJS()).toEqual([5, 6, 1, 2, 3, 4]);
    expect(stack.pushAll(List<number>([5, 6])).toJS()).toEqual([5, 6, 1, 2, 3, 4]);
    
    expect(stack.shift().toJS()).toEqual([2, 3, 4]);
    expect(stack.pop().toJS()).toEqual([2, 3, 4]);
  });
});