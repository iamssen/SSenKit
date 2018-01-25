import { Collection, Map } from 'immutable';

describe('Collection.Keyed', () => {
  it('Sequence functions', () => {
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3, d: 4});
    
    // [K, V] 를 [V, K]로 역전 시킨다. Index 생성시에 도움이 될 것 같기도 하고...
    expect(
      keyed
        .flip()
        .equals(Map<number, string>([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']])),
    ).toBeTruthy();
  });
  
  it('Sequence algorithms', () => {
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3, d: 4});
    
    // K를 변조한다
    expect(
      keyed
        .mapKeys((k: string) => 'x' + k)
        .equals(Map<number>({xa: 1, xb: 2, xc: 3, xd: 4})),
    ).toBeTruthy();
    
    // [K, V]를 모두 변조한다 (이게 의외로 쓸만할듯...)
    expect(
      keyed
        .mapEntries((e: [string, number]) => ['x' + e[0], e[1] * 100])
        .equals(Map<number>({xa: 100, xb: 200, xc: 300, xd: 400})),
    ).toBeTruthy();
  });
});