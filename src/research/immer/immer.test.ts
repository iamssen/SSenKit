import produce from 'immer';
import { action, IValueDidChange, observable, observe } from 'mobx';

describe('immer', () => {
  it('Test Set, Map', () => {
    const set1: Set<string> = new Set(['a', 'b', 'c']);
    //const set2: Set<string> = produce(set1, (draft: Set<string>) => {
    //  draft.delete('b');
    //  draft.add('d');
    //});
    const set2: Set<string> = new Set<string>(set1);
    set2.delete('b');
    set2.add('d');
    
    expect(set1 === set2).toBeFalsy();
    expect(Array.from(set1)).toEqual(['a', 'b', 'c']);
    expect(Array.from(set2)).toEqual(['a', 'c', 'd']);
    
    const map1: Map<string, number> = new Map([['a', 1], ['b', 2], ['c', 3]]);
    //const map2: Map<string, number> = produce(map1, (draft: Map<string, number>) => {
    //  map2.delete('b');
    //  map2.set('d', 4);
    //});
    const map2: Map<string, number> = new Map<string, number>(map1);
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
    expect(produce(arr, (draft: string[]) => {
      draft.push('d', 'e'); // ['a', 'b', 'c', 'd', 'e']
      return draft;
    })).toEqual(['a', 'b', 'c', 'd', 'e']);
    
    const obj: object = {a: 1, b: 2, c: 3};
    expect(produce(obj, (draft: object) => {
      draft['a'] = 3; // {a: 3, b: 2, c: 3}
      delete draft['c']; // {a: 3, b: 2}
      draft['d'] = 100; // {a: 3, b: 2, d: 100}
      return draft;
    })).toEqual({a: 3, b: 2, d: 100});
    
    const str: string = 'a';
    expect(produce(str, (draft: string) => {
      return draft + 'ccc'; // 'accc'
    })).toEqual('accc');
  });
  
  it('Test mobx', () => {
    class Data {
      // @observable.ref 를 사용해서 observable array로 변환되지 않도록 한다
      @observable.ref arr: string[] = ['a', 'b', 'c'];
      
      @action update = (append: string) => {
        this.arr = produce(this.arr, (draft: string[]) => {
          draft.push(append);
        });
      };
    }
    
    const data: Data = new Data();
    
    expect(Array.isArray(data.arr)).toBeTruthy();
    expect(data.arr).toEqual(['a', 'b', 'c']);
    
    data.update('d');
    
    expect(Array.isArray(data.arr)).toBeTruthy();
    expect(data.arr).toEqual(['a', 'b', 'c', 'd']);
    
    return new Promise((resolve: () => void) => {
      observe(data, 'arr', ({oldValue, newValue}: IValueDidChange<string[]>) => {
        expect(oldValue).toEqual(['a', 'b', 'c', 'd']);
        expect(newValue).toEqual(['a', 'b', 'c', 'd', 'e']);
        resolve();
      });
      
      setTimeout(() => {
        data.update('e');
      }, 200);
    });
  });
  
  it('Test deep', () => {
    const arr: (string | string[])[] = ['a', ['b', 'c']];
    expect(produce(arr, (draft: (string | string[])[]) => {
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
    
    expect(produce(obj, (draft: object) => {
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