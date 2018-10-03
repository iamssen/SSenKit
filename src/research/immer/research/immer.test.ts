import produce from 'immer';

/***
 * 결론
 * 1. array, object만 사용할 수 있다 (primitive는 사실 상 의미없으니...)
 * 2. Set, Map은 new Set(otherSet)과 같은 형태로 대체해야 한다 (immutable object)
 */

describe('immer', () => {
  it('Test Set, Map', () => {
    // immer는 primitive, object, array만 지원하기 때문에 에러가 발생한다
    expect(() => {
      produce(new Set(), draft => {
        // @ts-ignore Error 강제 발생 시킴
        draft.add('foo');
      });
    }).toThrow();
    
    // 대신 아래와 같이 new Set(Set), new Map(Map) 을 사용할 수 있을 것 같다
    const set1: Set<string> = new Set(['a', 'b', 'c']);
    const set2: Set<string> = new Set(set1);
    set2.delete('b');
    set2.add('d');
    
    expect(set1 === set2).toBeFalsy();
    expect(Array.from(set1)).toEqual(['a', 'b', 'c']);
    expect(Array.from(set2)).toEqual(['a', 'c', 'd']);
    
    const map1: Map<string, number> = new Map([['a', 1], ['b', 2], ['c', 3]]);
    const map2: Map<string, number> = new Map(map1);
    map2.delete('b');
    map2.set('d', 4);
    
    expect(map1 === map2).toBeFalsy();
    expect(Array.from(map1.keys())).toEqual(['a', 'b', 'c']);
    expect(Array.from(map1.values())).toEqual([1, 2, 3]);
    expect(Array.from(map2.keys())).toEqual(['a', 'c', 'd']);
    expect(Array.from(map2.values())).toEqual([1, 3, 4]);
  });
  
  it('Test basic', () => {
    const arr: string[] = ['a', 'b', 'c'];
    expect(produce(arr, draft => {
      draft.push('d', 'e'); // ['a', 'b', 'c', 'd', 'e']
      return draft;
    })).toEqual(['a', 'b', 'c', 'd', 'e']);
    
    const obj: object = {a: 1, b: 2, c: 3};
    expect(produce(obj, draft => {
      draft['a'] = 3; // {a: 3, b: 2, c: 3}
      delete draft['c']; // {a: 3, b: 2}
      draft['d'] = 100; // {a: 3, b: 2, d: 100}
      return draft;
    })).toEqual({a: 3, b: 2, d: 100});
    
    const str: string = 'a';
    expect(produce(str, draft => {
      return draft + 'ccc'; // 'accc'
    })).toEqual('accc');
  });
  
  //it('Test mobx', () => {
  //  // 끙... MobX에서는 사용할 수 없을 것 같다.
  //  const arr: string[] = observable(['a', 'b', 'c']);
  //  console.log('immer.test.ts..()', arr);
  //
  //  //expect(produce(arr, draft => {
  //  //  draft.push('d');
  //  //})).toEqual(['a', 'b', 'c', 'd']);
  //});
  
  it('Test deep', () => {
    const arr: (string | string[])[] = ['a', ['b', 'c']];
    expect(produce(arr, draft => {
      (draft[1] as string[]).splice(1, 1); // ['a', ['b']]
      (draft[1] as string[]).push('d'); // ['a', ['b', 'd']]
      draft.push(['e']); // ['a', ['b', 'd'], ['e']]
      draft.push('f'); // ['a', ['b', 'd'], ['e'], 'f']
    })).toEqual(['a', ['b', 'd'], ['e'], 'f']);
    
    const obj: object = {
      a: {
        b: 1,
        c: {
          d: 2,
        },
      },
      e: 3,
    };
    
    expect(produce(obj, draft => {
      delete draft['a']['b']; // {a: {c: {d: 2}}, e: 3}
      draft['a']['c']['d'] = 5; // {a: {c: {d: 5}}, e: 3}
      draft['a']['c']['f'] = {}; // {a: {c: {d: 5, f: {}}}, e: 3}
      draft['a']['c']['f']['g'] = 4; // {a: {c: {d: 5, f: {g: 4}}}, e: 3}
    })).toEqual({
      a: {
        c: {
          d: 5,
          f: {
            g: 4,
          },
        },
      },
      e: 3,
    });
  });
});