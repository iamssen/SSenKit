import { fromJS, Map } from 'immutable';
import { AMap } from './Collection.test';

describe('Map', () => {
  it('Persistent changes', () => {
    const map: Map<string, number> = Map<number>({a: 1, b: 2, c: 3});
    
    expect(map.clear().size).toEqual(0);
    expect(map.update('b', (b: number) => b * 100).get('b')).toEqual(200);
    expect(map.update('z', 8, (z: number) => z * 100).get('z')).toEqual(800);
    
    expect(
      map
        .merge(Map<number>({d: 4, e: 5}))
        .toJS(),
    ).toEqual({a: 1, b: 2, c: 3, d: 4, e: 5});
    
    expect(
      map
        .merge({d: 4, e: 5})
        .toJS(),
    ).toEqual({a: 1, b: 2, c: 3, d: 4, e: 5});
    
    // Object.assign과 같다. 뒤에 오는 c가 최종 결과에 반영된다
    expect(
      map
        .merge({c: 100, d: 4, e: 5})
        .toJS(),
    ).toEqual({a: 1, b: 2, c: 100, d: 4, e: 5});
    
    expect(
      map
        .mergeWith(
          ((oldVal: number, newVal: number, k: string) => {
            return oldVal > newVal ? oldVal : newVal; // 2. 중복을 어떻게 처리할지 결정한다
          }),
          {c: 100, d: 4, e: 5}, // 1. 입력된 값들 중 중복값이 있으면
          {c: 300},
          {c: 1000}, // 3. 중복된 값이 여러번이면 여러번 실행된다
        )
        .toJS(),
    ).toEqual({a: 1, b: 2, c: 1000, d: 4, e: 5});
  });
  
  it('Transient changes', () => {
    const map: Map<string, number> = Map<number>({a: 1, b: 2, c: 3});
    const tree: AMap = fromJS({
      a: 'a-1',
      children: [
        {
          b: 'b-11',
          children: [
            {c: 'c-111'},
            {c: 'c-112'},
          ],
        },
      ],
    });
    
    // Mutable... 대입해서 새로운 instance을 저장하지 않아도 된다.
    // Bulk update를 칠때 도움이 될 것 같다.
    expect(
      map
        .withMutations((mutable: Map<string, number>) => {
          mutable.set('a', 100);
          mutable.set('c', 300);
          return mutable;
        })
        .toJS(),
    ).toEqual({
      a: 100,
      b: 2,
      c: 300,
    });
    
    // Tree 때문에 고민하지 말고 그냥 setIn()을 사용하면 되겠다
    expect(
      tree
        .withMutations((mutable: AMap) => {
          mutable.set('a', 'a-2');
          mutable.setIn(['children', 0, 'children', 1, 'c'], 'c-xxx');
          return mutable;
        })
        .toJS(),
    ).toEqual({
      a: 'a-2',
      children: [
        {
          b: 'b-11',
          children: [
            {c: 'c-111'},
            {c: 'c-xxx'},
          ],
        },
      ],
    });
  });
});