import { List } from 'immutable';

describe('List', () => {
  it('Persistent changes', () => {
    const list: List<number> = List<number>([1, 2, 3, 4]);
    
    expect(list.set(2, 100).toJS()).toEqual([1, 2, 100, 4]);
    expect(list.set(4, 100).toJS()).toEqual([1, 2, 3, 4, 100]);
    expect(list.set(5, 100).toJS()).toEqual([1, 2, 3, 4, undefined, 100]);
    
    expect(list.delete(0).toJS()).toEqual([2, 3, 4]);
    expect(list.delete(2).toJS()).toEqual([1, 2, 4]);
    expect(list.delete(5).toJS()).toEqual([1, 2, 3, 4]);
    
    expect(list.insert(2, 100).toJS()).toEqual([1, 2, 100, 3, 4]);
    expect(list.insert(5, 100).toJS()).not.toEqual([1, 2, 3, 4, undefined, 100]);
    expect(list.insert(5, 100).toJS()).toEqual([1, 2, 3, 4, 100]);
    
    expect(list.clear().size).toEqual(0);
    
    expect(list.push(5, 6).toJS()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(list.pop().toJS()).toEqual([1, 2, 3]);
    
    expect(list.unshift(5, 6).toJS()).toEqual([5, 6, 1, 2, 3, 4]);
    expect(list.shift().toJS()).toEqual([2, 3, 4]);
    
    expect(
      list
        .update(2, (v: number) => v * 100)
        .toJS(),
    ).toEqual([1, 2, 300, 4]);
    
    expect(
      list
        .update(5, 9, (v: number) => v * 100)
        .toJS(),
    ).toEqual([1, 2, 3, 4, undefined, 900]);
    
    // concat()이 아니다. 같은 Index를 덮어쓰는 Merge다.
    expect(
      list
        .merge(
          List<number>([5, 6, 7]),
          List<number>([100, 200]),
        )
        .toJS(),
    ).toEqual([100, 200, 7, 4]);
    
    expect(
      list
        .mergeWith(
          (oldVal, newVal) => {
            return Math.max(oldVal, newVal);
          },
          List<number>([-1, -2, -3, -4, -5]),
          List<number>([100, 200]),
        )
        .toJS(),
    ).toEqual([100, 200, 3, 4, NaN]);
    
    
  });
  
  it('Deep persistent changes', () => {
  
  });
});