import { Collection, fromJS, isIndexed, isKeyed, List, Map, Seq, Set, Stack } from 'immutable';

export interface C {
  c: string;
}

export interface B {
  b: string;
  children: C[];
}

export interface A {
  a: string;
  children: B[];
}

// Map Type은 K에 keyof만 사용하고, V는 별개로 지정하는게 좋을 것 같다.
// as를 써야하겠지만 이 방식이 제일 간단할 것 같다.
export type CMap = Map<keyof C, string>;
export type BMap = Map<keyof B, string | List<CMap>>;
export type AMap = Map<keyof A, string | List<BMap>>;

describe('Collection', () => {
  it('Reading Values', () => {
    const x: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    
    expect(x.get(0)).toEqual(1);
    expect(x.get(1)).toEqual(2);
    expect(x.get(2)).toEqual(3);
    expect(x.get(3)).toBeUndefined();
    expect(x.get<number>(3, 8)).toEqual(8); // using not set value
    
    expect(x.has(0)).toBeTruthy();
    expect(x.has(1)).toBeTruthy();
    expect(x.has(2)).toBeTruthy();
    expect(x.has(3)).toBeFalsy();
    
    // Collection에 특정 V가 들어있는지 확인할 수 있다
    expect(x.contains(1)).toBeTruthy();
    expect(x.contains(2)).toBeTruthy();
    expect(x.contains(3)).toBeTruthy();
    expect(x.contains(4)).toBeFalsy();
    
    expect(x.includes(1)).toBeTruthy();
    expect(x.includes(2)).toBeTruthy();
    expect(x.includes(3)).toBeTruthy();
    expect(x.includes(4)).toBeFalsy();
    
    // 처음 / 마지막 값을 가져오기
    // arr[arr.length - 1] 를 좀 더 세련되게 대체할 수 있겠다
    expect(x.first()).toEqual(1);
    expect(x.last()).toEqual(3);
  });
  
  it('Reading deep values', () => {
    const x: Collection<number, AMap> = fromJS([
      {
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
      },
    ]);
    
    // hasIn()과 getIn()이 최하위 API라는건 모든 영역에서 사용이 가능하다는 이야기...
    expect(x.hasIn([0, 'children', 0, 'children', 0, 'c'])).toBeTruthy();
    expect(x.getIn([0, 'children', 0, 'children', 0, 'c'])).toEqual('c-111');
    expect(x.getIn([0, 'children', 0, 'children', 1, 'c'])).toEqual('c-112');
  });
  
  it('Persistent changes', () => {
    // Collection 단계에서는 그리 큰 의미를 가지는 API는 아닌 것 같다.
    // update(K, (V) => V) 단계로 가야지 의미가 생길 것 같다.
    const x: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    const y: number = x.update<number>(t => t.size);
    const z: Collection.Keyed<string, number> = x.update(t => t.filter(x => x < 2));
    
    expect(x.size).toEqual(3);
    expect(y).toEqual(3);
    expect(z.size).toEqual(1);
  });
  
  it('Conversion to JavaScript types', () => {
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    expect(indexed.toArray()).toEqual([1, 2, 3]);
    expect(indexed.toObject()).toEqual({'0': 1, '1': 2, '2': 3}); // Index가 문자로 된 Object가 만들어진다
    expect(indexed.toJSON()).toEqual([1, 2, 3]);
    expect(indexed.toJS()).toEqual([1, 2, 3]);
    
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    expect(keyed.toArray()).toEqual([1, 2, 3]); // V만 뽑아낸다
    expect(keyed.toObject()).toEqual({a: 1, b: 2, c: 3});
    expect(keyed.toJSON()).toEqual({a: 1, b: 2, c: 3});
    expect(keyed.toJS()).toEqual({a: 1, b: 2, c: 3});
    
    const tree: Collection<number, AMap> = fromJS([
      {
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
      },
    ]);
    
    const arr: AMap[] = tree.toArray();
    expect(Array.isArray(arr)).toBeTruthy();
    expect(isKeyed(arr[0])).toBeTruthy();
    expect(isIndexed(arr[0].get('children'))).toBeTruthy();
    expect(arr[0].getIn(['children', 0, 'children', 0, 'c'])).toEqual('c-111');
    
    const obj: {[k: string]: AMap} = tree.toObject();
    expect(isKeyed(obj['0'])).toBeTruthy();
    expect(isIndexed(obj['0'].get('children'))).toBeTruthy();
    expect(obj['0'].getIn(['children', 0, 'children', 0, 'c'])).toEqual('c-111');
    
    const json: AMap[] = tree.toJSON() as AMap[];
    expect(Array.isArray(json)).toBeTruthy();
    expect(isKeyed(json[0])).toBeTruthy();
    expect(isIndexed(json[0].get('children'))).toBeTruthy();
    expect(json[0].getIn(['children', 0, 'children', 0, 'c'])).toEqual('c-111');
    
    const js: A[] = tree.toJS() as A[];
    expect(Array.isArray(js)).toBeTruthy();
    expect(js[0].a).toEqual('a-1');
    expect(Array.isArray(js[0].children)).toBeTruthy();
    expect(js[0].children[0].children[0].c).toEqual('c-111');
  });
  
  it('Iterators', () => {
    // ES6 IterableIterator를 return한다.
    // 단순히 K, V 중 하나를 Filtering 하는 용도나
    // Iterator를 받아들이는 외부 API들과의 연동에 사용할만 하겠다.
    
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    
    const indexedKeysIterator: IterableIterator<number> = indexed.keys();
    expect(indexedKeysIterator.next()).toEqual({done: false, value: 0});
    expect(indexedKeysIterator.next()).toEqual({done: false, value: 1});
    expect(indexedKeysIterator.next()).toEqual({done: false, value: 2});
    expect(indexedKeysIterator.next()).toEqual({done: true, value: undefined});
    
    const indexedValuesIterator: IterableIterator<number> = indexed.values();
    expect(indexedValuesIterator.next()).toEqual({done: false, value: 1});
    expect(indexedValuesIterator.next()).toEqual({done: false, value: 2});
    expect(indexedValuesIterator.next()).toEqual({done: false, value: 3});
    expect(indexedValuesIterator.next()).toEqual({done: true, value: undefined});
    
    const indexedEntriesIterator: IterableIterator<[number, number]> = indexed.entries();
    expect(indexedEntriesIterator.next()).toEqual({done: false, value: [0, 1]});
    expect(indexedEntriesIterator.next()).toEqual({done: false, value: [1, 2]});
    expect(indexedEntriesIterator.next()).toEqual({done: false, value: [2, 3]});
    expect(indexedEntriesIterator.next()).toEqual({done: true, value: undefined});
    
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    
    const keyedKeysIterator: IterableIterator<string> = keyed.keys();
    expect(keyedKeysIterator.next()).toEqual({done: false, value: 'a'});
    expect(keyedKeysIterator.next()).toEqual({done: false, value: 'b'});
    expect(keyedKeysIterator.next()).toEqual({done: false, value: 'c'});
    expect(keyedKeysIterator.next()).toEqual({done: true, value: undefined});
    
    const keyedValuesIterator: IterableIterator<number> = keyed.values();
    expect(keyedValuesIterator.next()).toEqual({done: false, value: 1});
    expect(keyedValuesIterator.next()).toEqual({done: false, value: 2});
    expect(keyedValuesIterator.next()).toEqual({done: false, value: 3});
    expect(keyedValuesIterator.next()).toEqual({done: true, value: undefined});
    
    const keyedEntriesIterator: IterableIterator<[string, number]> = keyed.entries();
    expect(keyedEntriesIterator.next()).toEqual({done: false, value: ['a', 1]});
    expect(keyedEntriesIterator.next()).toEqual({done: false, value: ['b', 2]});
    expect(keyedEntriesIterator.next()).toEqual({done: false, value: ['c', 3]});
    expect(keyedEntriesIterator.next()).toEqual({done: true, value: undefined});
  });
  
  it('Collections (Seq)', () => {
    // Iterator와 유사하지만 Seq를 내보내준다.
    // Immutable 특성이 필요하다면 쓸만 하겠다.
    
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    
    const indexedKeySeq: Seq.Indexed<number> = indexed.keySeq();
    expect(indexedKeySeq.get(0)).toEqual(0);
    expect(indexedKeySeq.get(1)).toEqual(1);
    expect(indexedKeySeq.get(2)).toEqual(2);
    
    const indexedValueSeq: Seq.Indexed<number> = indexed.valueSeq();
    expect(indexedValueSeq.get(0)).toEqual(1);
    expect(indexedValueSeq.get(1)).toEqual(2);
    expect(indexedValueSeq.get(2)).toEqual(3);
    
    const indexedEntrySeq: Seq.Indexed<[number, number]> = indexed.entrySeq();
    expect(indexedEntrySeq.get(0)).toEqual([0, 1]);
    expect(indexedEntrySeq.get(1)).toEqual([1, 2]);
    expect(indexedEntrySeq.get(2)).toEqual([2, 3]);
    
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    
    const keyedKeySeq: Seq.Indexed<string> = keyed.keySeq();
    expect(keyedKeySeq.get(0)).toEqual('a');
    expect(keyedKeySeq.get(1)).toEqual('b');
    expect(keyedKeySeq.get(2)).toEqual('c');
    
    const keyedValueSeq: Seq.Indexed<number> = keyed.valueSeq();
    expect(keyedValueSeq.get(0)).toEqual(1);
    expect(keyedValueSeq.get(1)).toEqual(2);
    expect(keyedValueSeq.get(2)).toEqual(3);
    
    const keyedEntrySeq: Seq.Indexed<[string, number]> = keyed.entrySeq();
    expect(keyedEntrySeq.get(0)).toEqual(['a', 1]);
    expect(keyedEntrySeq.get(1)).toEqual(['b', 2]);
    expect(keyedEntrySeq.get(2)).toEqual(['c', 3]);
  });
  
  it('Conversion to Collections', () => {
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    const set: Collection.Set<number> = Set<number>([1, 2, 3]);
    
    // {0..}
    expect(indexed.toMap().equals(Map<number, number>([[0, 1], [1, 2], [2, 3]]))).toBeTruthy();
    expect(indexed.toSet().equals(Set<number>([1, 2, 3]))).toBeTruthy();
    expect(indexed.toStack().equals(Stack<number>([1, 2, 3]))).toBeTruthy();
    
    expect(keyed.toList().equals(List<number>([1, 2, 3]))).toBeTruthy();
    expect(keyed.toSet().equals(Set<number>([1, 2, 3]))).toBeTruthy();
    expect(keyed.toStack().equals(Stack<number>([1, 2, 3]))).toBeTruthy();
    
    // {1..}
    expect(set.toMap().equals(Map<number, number>([[1, 1], [2, 2], [3, 3]]))).toBeTruthy();
    expect(set.toList().equals(List<number>([1, 2, 3]))).toBeTruthy();
    expect(set.toStack().equals(Stack<number>([1, 2, 3]))).toBeTruthy();
  });
  
  it('Conversion to Seq', () => {
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    const set: Collection.Set<number> = Set<number>([1, 2, 3]);
    
    // {0..}
    // 같지만 equals는 false로 나온다
    //console.log('Collection.test.ts..()', indexed.toKeyedSeq(), Seq.Keyed<number, number>([[0, 1], [1, 2], [2, 3]]));
    //expect(indexed.toKeyedSeq().equals(Seq.Keyed<number, number>([[0, 1], [1, 2], [2, 3]]))).toBeTruthy();
    expect(indexed.toSetSeq().equals(Seq.Set<number>([1, 2, 3]))).toBeTruthy();
    
    expect(keyed.toIndexedSeq().equals(Seq.Indexed<number>([1, 2, 3]))).toBeTruthy();
    expect(keyed.toSetSeq().equals(Seq.Set<number>([1, 2, 3]))).toBeTruthy();
    
    // {1..}
    // 같지만 equals는 false로 나온다
    //console.log('Collection.test.ts..()', set.toKeyedSeq(), Seq.Keyed<number, number>([[1, 1], [2, 2], [3, 3]]));
    //expect(set.toKeyedSeq().equals(Seq.Keyed<number, number>([[1, 1], [2, 2], [3, 3]]))).toBeTruthy();
    expect(set.toIndexedSeq().equals(Seq.Indexed<number>([1, 2, 3]))).toBeTruthy();
  });
  
  it('Sequence algorithms', () => {
    // map, filter, sort 모두 잘 작동된다.
    // 사용에 주저할 필요가 없다. 심리적인 장벽을 허물자.
    
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    
    expect(
      indexed
        .map<string>((v: number) => 'a' + v)
        .equals(List<string>(['a1', 'a2', 'a3'])),
    ).toBeTruthy();
    
    expect(
      indexed
        .filter((v: number) => v > 2)
        .equals(List<number>([3])),
    ).toBeTruthy();
    
    expect(
      indexed
        .filterNot((v: number) => v > 2)
        .equals(List<number>([1, 2])),
    ).toBeTruthy();
    
    expect(indexed.reverse().equals(List<number>([3, 2, 1]))).toBeTruthy();
    
    expect(
      indexed
        .sort((a: number, b: number) => a > b ? -1 : 1)
        .equals(List<number>([3, 2, 1])),
    ).toBeTruthy();
    
    // Value Mapper를 사용해서 비교가 될 숫자를 도출할 수 있다.
    // 손에 익히면 도움이 많이 될 것 같다
    expect(
      List<{a: number}>([{a: 1}, {a: 2}, {a: 3}])
        .sortBy<number>(
          (v: {a: number}) => v.a,
          (a: number, b: number) => a > b ? -1 : 1,
        )
        .toArray(),
    ).toEqual([{a: 3}, {a: 2}, {a: 1}]);
    
    // 특정 V를 바탕으로 Group을 만드는 작업. 의외로 도움이 많이 될 것 같다.
    expect(
      List<{c: string, a: number}>([
        {c: 'red', a: 1},
        {c: 'red', a: 2},
        {c: 'blue', a: 3},
        {c: 'red', a: 4},
        {c: 'blue', a: 5},
      ])
        .groupBy<string>((v: {c: string, a: number}) => v.c)
        .toJS(),
    ).toEqual({
      red: [
        {c: 'red', a: 1},
        {c: 'red', a: 2},
        {c: 'red', a: 4},
      ],
      blue: [
        {c: 'blue', a: 3},
        {c: 'blue', a: 5},
      ],
    });
    
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    
    expect(
      keyed
        .map<string>((v: number, k: string) => k + v)
        .equals(Map<string>({a: 'a1', b: 'b2', c: 'c3'})),
    ).toBeTruthy();
    
    expect(
      keyed
        .filter((v: number, k: string) => v > 1)
        .equals(Map<number>({b: 2, c: 3})),
    ).toBeTruthy();
    
    expect(
      keyed
        .filterNot((v: number, k: string) => v > 1)
        .equals(Map<number>({a: 1})),
    ).toBeTruthy();
    
    expect(
      keyed
        .reverse()
        .equals(keyed),
    ).toBeTruthy();
    // Collection.Keyed 역시 reverse(), sort(), sortBy() 가 작동하지만 특별한 의미가 없다
    
    // Indexed와는 다르게 하위 리스트가 Keyed가 된다
    expect(
      Map<{c: string, v: number}>({
        a: {c: 'red', v: 1},
        b: {c: 'blue', v: 2},
        c: {c: 'red', v: 3},
        d: {c: 'blue', v: 4},
        e: {c: 'red', v: 5},
      })
        .groupBy<string>((v: {c: string, v: number}) => v.c)
        .toJS(),
    ).toEqual({
      red: {
        a: {c: 'red', v: 1},
        c: {c: 'red', v: 3},
        e: {c: 'red', v: 5},
      },
      blue: {
        b: {c: 'blue', v: 2},
        d: {c: 'blue', v: 4},
      },
    });
  });
  
  it('Side Effect', () => {
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    const set: Collection.Set<number> = Set<number>([1, 2, 3]);
    
    indexed.forEach((v: number, k: number, iter: Collection<number, number>) => {
      expect(typeof v).toEqual('number');
      expect(typeof k).toEqual('number');
      expect(iter).toEqual(indexed);
    });
    
    keyed.forEach((v: number, k: string, iter: Collection.Keyed<string, number>) => {
      expect(typeof v).toEqual('number');
      expect(typeof k).toEqual('string');
      expect(iter).toEqual(keyed);
    });
    
    set.forEach((v: number, k: number, iter: Collection.Set<number>) => {
      expect(typeof v).toEqual('number');
      expect(typeof k).toEqual('number');
      expect(iter).toEqual(set);
    });
  });
  
  it('Creating Subsets', () => {
    // 순서를 기준으로 하기 때문에 Keyed나 Set은 의미가 없을 것 같다.
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    
    // 잘라내기
    expect(indexed.slice(2).equals(List<number>([3]))).toBeTruthy();
    // 처음을 제외
    expect(indexed.rest().equals(List<number>([2, 3]))).toBeTruthy();
    // 마지막을 제외
    expect(indexed.butLast().equals(List<number>([1, 2]))).toBeTruthy();
    
    // 앞의 몇 개를 제외한 나머지
    expect(indexed.skip(2).equals(List([3]))).toBeTruthy();
    // 뒤의 몇 개를 제외한 나머지
    expect(indexed.skipLast(2).equals(List([1]))).toBeTruthy();
    // false 조건이 나온 이후의 것들
    expect(
      indexed
        .skipWhile((v: number) => v < 2)
        .equals(List<number>([2, 3])),
    ).toBeTruthy();
    // true 조건이 나온 이후의 것들
    expect(
      indexed
        .skipUntil((v: number) => v > 2)
        .equals(List<number>([3])),
    ).toBeTruthy();
    
    // skip* 보다는 take*가 좀 더 자연스러운 논리를 가진다.
    // 건너뛰기 논리를 가진 skip* 보다는 take를 우선 사용할 일이 더 많을 것 같다.
    
    // 앞의 몇 개
    expect(indexed.take(2).equals(List<number>([1, 2]))).toBeTruthy();
    // 뒤의 몇 개
    expect(indexed.takeLast(2).equals(List<number>([2, 3]))).toBeTruthy();
    // false 조건이 나올때까지 가져온다
    expect(
      indexed
        .takeWhile((v: number) => v < 3)
        .equals(List<number>([1, 2])),
    ).toBeTruthy();
    // true 조건이 나올때까지 가져온다
    expect(
      indexed
        .takeUntil((v: number) => v > 1)
        .equals(List<number>([1])),
    ).toBeTruthy();
  });
  
  it('Combination', () => {
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    
    // 다른 List를 concat 할 수 있고
    expect(
      indexed
        .concat(List<number>([4, 5]), List<number>([6, 7]))
        .equals(List<number>([1, 2, 3, 4, 5, 6, 7])),
    ).toBeTruthy();
    
    // Array도 가능
    expect(
      indexed
        .concat([4, 5], [6, 7])
        .equals(List<number>([1, 2, 3, 4, 5, 6, 7])),
    ).toBeTruthy();
    
    // Push처럼 넣을 수도 있고
    expect(
      indexed
        .concat(4, 5, 6, 7)
        .equals(List<number>([1, 2, 3, 4, 5, 6, 7])),
    ).toBeTruthy();
    
    // Collection.Keyed를 넣을 경우 V값들만 사용해서 합친다
    expect(
      indexed
        .concat(Map<number>({a: 4, b: 5}))
        .equals(List<number>([1, 2, 3, 4, 5])),
    ).toBeTruthy();
    
    // Collection.Keyed에는 [K, V] 형태의 값들만 concat 할 수 있다
    expect(
      keyed
        .concat(Map<number>({d: 4, e: 5}), Map<number>({f: 6}))
        .equals(Map<number>({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6})),
    ).toBeTruthy();
    
    // object도 가능
    expect(
      keyed
        .concat({d: 4, e: 5}, {f: 6})
        .equals(Map<number>({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6})),
    ).toBeTruthy();
    
    // 계층형 List를 평판화 시킨다
    expect(
      <List<List<number>>>fromJS([[1, 2, 3], [4, 5, 6], [7, 8]]) // of List<List<number>>
        .flatten()
        .equals(List<number>([1, 2, 3, 4, 5, 6, 7, 8])),
    ).toBeTruthy();
    
    // Depth가 깊은 Tree들도 합친다
    type ListTreeValue = (number | ListTree);
    
    interface ListTree extends List<ListTreeValue> {
    }
    
    expect(
      <ListTree>fromJS([[[1, 2], [3]], [[4], [5, [6]]], [7, 8]]) // of List<...<number>>
        .flatten()
        .equals(List<number>([1, 2, 3, 4, 5, 6, 7, 8])),
    ).toBeTruthy();
    
    // Shallow Depth = 1
    expect(
      <ListTree>fromJS([[[1, 2], [3]], [[4, 5], [6]], [[7, 8]]]) // of List<List<List<number>>>
        .flatten(true) // shallow = depth 1
        .toJS(),
    ).toEqual([[1, 2], [3], [4, 5], [6], [7, 8]]);
    
    // Depth 지정이 가능
    expect(
      <ListTree>fromJS([[[1, 2], [3]], [[4, 5], [6]], [[7, 8]]]) // of List<List<List<number>>>
        .flatten(1)
        .toJS(),
    ).toEqual([[1, 2], [3], [4, 5], [6], [7, 8]]);
    
    expect(
      <ListTree>fromJS([[[1, 2], [3]], [[4, 5], [6]], [[7, 8]]]) // of List<List<List<number>>>
        .flatten(2)
        .toJS(),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    
    // [K, V] Tree의 경우 최종적인 Leaf만 가져와서 flatten() 시킨다
    type MapTreeValue = (number | MapTree);
    
    interface MapTree extends Map<string, MapTreeValue> {
    }
    
    expect(
      <MapTree>fromJS({a: {a1: 1, a2: 2}, b: {b1: 1, b2: 2}})
        .flatten()
        .toJS(),
    ).toEqual({a1: 1, a2: 2, b1: 1, b2: 2});
    
    expect(
      <MapTree>fromJS({a: {a1: {a11: 3, a12: {a121: 1}}, a2: 2}, b: {b1: 1, b2: 2}})
        .flatten()
        .toJS(),
    ).toEqual({a11: 3, a121: 1, a2: 2, b1: 1, b2: 2});
    
    // flatMap은 map().flatten(1) 과 같다. 그리 사용할 케이스가 많다고 보긴 어려울 것 같다.
    expect(
      <ListTree>fromJS([[1, 2, 3], [4, 5, 6], [7, 8]]) // of List<List<number>>
        .flatMap((v: List<number>) => {
          return v.map(x => 'a' + x);
        })
        .equals(List<string>(['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'])),
    ).toBeTruthy();
  });
  
  it('Search for value', () => {
    // K 기준, V 기준 검색이 모두 가능하고,
    // 돌려받을 값도 K, V, [K, V] 모두 가능
    
    const indexed: Collection<number, number> = List<number>([1, 2, 3]) as Collection<number, number>;
    const keyed: Collection.Keyed<string, number> = Map<number>({a: 1, b: 2, c: 3});
    
    expect(indexed.find(
      (v: number) => v === 2,
    )).toEqual(2);
    
    expect(indexed.find(
      (v: number) => v === 6,
      null,
      10,
    )).toEqual(10);
    
    expect(indexed.findLast(
      (v: number) => v === 3,
    )).toEqual(3);
    
    expect(indexed.findEntry(
      (v: number) => v === 2,
    )).toEqual([1, 2]);
    
    expect(indexed.findEntry(
      (v: number) => v === 6,
      null,
      10,
    )).toEqual(10); // notSetValue가 [-1, 10]이 아니라 10으로 들어온다. 문제 많음
    
    expect(indexed.findLastEntry(
      (v: number) => v === 3,
    )).toEqual([2, 3]);
    
    expect(indexed.findKey(
      (v: number) => v === 2,
    )).toEqual(1);
    
    expect(indexed.findKey(
      (v: number) => v === 6,
    )).toEqual(undefined);
    
    // (V) => K    V를 넣어서 K를 가져온다
    expect(indexed.keyOf(2)).toEqual(1);
    expect(indexed.lastKeyOf(3)).toEqual(2);
    
    expect(indexed.maxBy<number>(
      (v: number) => v === 2 ? 100 : v,
    )).toEqual(2);
    
    expect(
      List<{a: number}>([{a: 1}, {a: 2}, {a: 3}])
        .maxBy<number>((v: {a: number}) => v.a),
    ).toEqual({a: 3});
    
    expect(keyed.find(
      (v: number) => v === 2,
    )).toEqual(2);
    
    expect(keyed.keyOf(2)).toEqual('b');
  });
  
  it('Comparison', () => {
    // 전체와 부분을 비교할 수 있다.
    // 집합 문제를 다룰때 도움이 되겠다.
    
    expect(
      List<number>([2, 3, 4])
        .isSubset(List<number>([1, 2, 3, 4, 5, 6, 7])),
    ).toBeTruthy();
    
    expect(
      List<number>([2, 3, 4])
        .isSubset([1, 2, 3, 4, 5, 6, 7]),
    ).toBeTruthy();
    
    expect(
      List<number>([1, 2, 3, 4, 5, 6, 7])
        .isSuperset(List<number>([2, 3, 4])),
    ).toBeTruthy();
    
    expect(
      List<number>([1, 2, 3, 4, 5, 6, 7])
        .isSuperset([2, 3, 4]),
    ).toBeTruthy();
    
    //expect(
    //  Map<number>({c: 3, d: 4})
    //    .isSubset(Map<number>({a: 1, b: 2, c: 3, d: 4, e: 5})),
    //).toBeTruthy();
    
    // 비교 대상이 Iterable이다 보니 Collection.Keyed와 비교할 수 없다.
    // Collection.Keyed에서는 사용하기 애매하겠다.
    
    expect(
      Map<number>({c: 3, d: 4})
        .isSubset([1, 2, 3, 4, 5]),
    ).toBeTruthy();
  });
});