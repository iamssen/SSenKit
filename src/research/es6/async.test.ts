describe('ES6 async / await', () => {
  function timeout<T>(ms: number, value: T) {
    return new Promise<T>((resolve: (value: T) => void) => setTimeout(() => resolve(value), ms));
  }
  
  test('basic', async () => {
    expect(1).toEqual(1);
    const x: number = await timeout(300, 100);
    expect(x).toEqual(100);
    expect(await timeout(300, 'aaa')).toEqual('aaa');
  });
  
  test('saga', async () => {
    //async function test(ms: number) {
    //  setTimeout(() => {
    //    console.log('async.test.ts..test()');
    //  }, ms);
    //}
    //
    //test(1000).then(() => {});
    //test(2000).then(() => {});
    //test(3000).then(() => {});
  });
});