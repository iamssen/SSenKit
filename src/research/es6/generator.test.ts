/**
 * 정리
 * - yield는 await와 같이 code를 break 시킨다
 * - yield* 은 iterable을 분해해서 받아들인다
 */
describe('ES6 generator / iterator', () => {
  function timeout<T>(ms: number, value: T) {
    return new Promise<T>((resolve: (value: T) => void) => setTimeout(() => resolve(value), ms));
  }
  
  it('basic', () => {
    function* gen(): IterableIterator<number> {
      yield 1;
      yield 2;
      yield 3;
    }
    
    const itr: IterableIterator<number> = gen();
    
    expect(itr.next()).toEqual({value: 1, done: false});
    expect(itr.next()).toEqual({value: 2, done: false});
    expect(itr.next()).toEqual({value: 3, done: false});
    expect(itr.next()).toEqual({done: true});
  });
  
  it('yield assign', () => {
    function* gen(): IterableIterator<number> {
      const x: number = yield 3;
      const y: number = yield 4;
      console.log('generator.test.ts..gen()', x, y);
    }
    
    const itr: IterableIterator<number> = gen();
    
    expect(itr.next()).toEqual({done: false, value: 3});
    expect(itr.next()).toEqual({done: false, value: 4});
    expect(itr.next()).toEqual({done: true});
  });
  
  it('next(value)', () => {
    function* gen(): IterableIterator<number> {
      const x: number = yield 1;
      expect(x).toEqual(20);
      
      const y: number = yield 2;
      expect(y).toEqual(30);
      
      const z: number = yield 3;
      expect(z).toBeUndefined();
      
      return x + y;
    }
    
    const itr: IterableIterator<number> = gen();
    
    // 10은 아무런 적용이 되지 않는다
    expect(itr.next(10)).toEqual({value: 1, done: false});
    // 20 -> x
    expect(itr.next(20)).toEqual({value: 2, done: false});
    // 30 -> y
    expect(itr.next(30)).toEqual({value: 3, done: false});
    // x + y = 50
    expect(itr.next()).toEqual({value: 50, done: true});
  });
  
  it('yield*', () => {
    function* nums(): IterableIterator<number> {
      yield 1;
      yield 1;
      yield 1;
    }
    
    function* gen() {
      yield* [1, 1, 1];
      yield* nums();
    }
    
    const itr: IterableIterator<number> = gen();
    
    for (const n of itr) {
      expect(n).toEqual(1);
    }
  });
  
  it('async generator / iterator', async () => {
    async function* gen() {
      yield timeout(100, 1);
      yield timeout(100, 2);
      yield timeout(100, 3);
    }
    
    const itr1: AsyncIterableIterator<number> = gen();
    
    expect(await itr1.next()).toEqual({value: 1, done: false});
    expect(await itr1.next()).toEqual({value: 2, done: false});
    expect(await itr1.next()).toEqual({value: 3, done: false});
    
    const itr2: AsyncIterableIterator<number> = gen();
    let i: number = 1;
    
    for await(const n of itr2) {
      expect(n).toEqual(i);
      i++;
    }
  });
  
  it('infinite yield', () => {
    function* gen() {
      yield 0;
      
      while (true) {
        yield 1;
        yield 2;
      }
    }
    
    const itr: IterableIterator<number> = gen();
    
    expect(itr.next()).toEqual({done: false, value: 0});
    
    Array.from({length: 100}).forEach(() => {
      expect(itr.next()).toEqual({done: false, value: 1});
      expect(itr.next()).toEqual({done: false, value: 2});
    });
  });
});