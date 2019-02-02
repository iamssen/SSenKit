import { Collection, isIndexed, isKeyed, List } from 'immutable';

describe('Collection.Indexed', () => {
  //it('Conversion to Seq', () => {
  //  // ???? 뭔 ㅆㅂ 에러만 나네
  //  const indexed: Collection.Indexed<number> = List<number>([1, 2, 3, 4]);
  //  console.log('Collection.Indexed.test.ts..()', indexed.fromEntrySeq());
  //});
  
  it('Combination', () => {
    const indexed: Collection.Indexed<number | string> = List<number>([1, 2, 3, 4]);
    
    // 모든 Item들의 중간에 특정 값을 끼워넣는다
    // String Rows 처리 등 이래저래 쓸만한 케이스가 있을듯 싶은데...
    expect(
      indexed
        .interpose('/')
        .toJS(),
    ).toEqual([1, '/', 2, '/', 3, '/', 4]);
    
    // 추가된 Item들을 순차적으로 배열한다
    // [0, 3, 6]
    // [1, 4, 8]
    // [2, 5, 9]
    // 와 같은 순서가 된다.
    // 추가적으로 최소 Item 숫자에 맞춰지기 때문에 3, 4와 9가 누락된다.
    expect(
      indexed
        .interleave(
          List<number>([7, 8, 9]) as Collection<number, number>,
          List<number>([100, 200]) as Collection<number, number>,
        )
        .toJS(),
    ).toEqual([1, 7, 100, 2, 8, 200]);
    
    // Array.splice()와 동일
    expect(
      indexed
        .splice(2, 1)
        .toJS(),
    ).toEqual([1, 2, 4]);
    
    // Collection.Indexed.interleave()와 동일하지만
    // 2차 배열로 값들을 묶어준다
    // 누락룰은 동일
    expect(
      indexed
        .zip(
          List<number>([7, 8, 9]) as Collection<number, number>,
          List<number>([100, 200]) as Collection<number, number>,
        )
        .toJS(),
    ).toEqual([[1, 7, 100], [2, 8, 200]]);
    
    // Collection.Indexed.zip()과 유사하지만
    // 2차 배열로 묶어버리는 zip()과 다르게 어떻게 묶을지 자의적으로 선택할 수 있다.
    // Grid와 같은 2차 배열 Data에서 합계를 낸다거나 하는데 유용할 것 같다
    expect(
      indexed
        .zipWith<string>(
          (...values: (string | number)[]) => {
            return values.join(':');
          },
          List<number>([100, 200]) as Collection<number, number>,
          List<string>(['x', 'y']) as Collection<number, string>,
          List<string>(['!', '@']) as Collection<number, string>,
        )
        .toJS(),
    ).toEqual(['1:100:x:!', '2:200:y:@']);
    
    expect(
      List<number>([1, 2, 3])
        .zipWith<number>(
          (...values: number[]) => {
            return values.reduce((sum: number, v: number) => sum + v, 0);
          },
          List<number>([10, 20, 30]) as Collection<number, number>,
          List<number>([100, 200, 300]) as Collection<number, number>,
          List<number>([1000, 2000, 3000]) as Collection<number, number>,
        )
        .toJS(),
    ).toEqual([1111, 2222, 3333]);
  });
  
  it('Search for value', () => {
    const indexed: Collection.Indexed<number | string> = List<number>([1, 2, 3, 4]);
    
    // Array.indexOf()와 동일한 것들
    expect(indexed.indexOf(2)).toEqual(1);
    expect(indexed.lastIndexOf(3)).toEqual(2);
    expect(indexed.findIndex((v: number | string) => v === 2)).toEqual(1);
    expect(indexed.findLastIndex((v: number | string) => v === 3)).toEqual(2);
  });
});