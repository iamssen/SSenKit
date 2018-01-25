import { Collection, fromJS, isIndexed, isKeyed, List, Map, Seq, Set, Stack } from 'immutable';
import { AMap } from './Collection.test';

describe('Tree', () => {
  it('Persistent changes', () => {
    // 복잡한 Tree를 merge 할 수 있다.
    // 깊은 수준까지 적용이 된다는게 편할 것 같다.
    expect(
      <Map<string, number | object>>fromJS({
        a: 1,
        b: {
          b1: 10,
        },
      })
        .mergeDeep(fromJS({
          a: {
            a1: 1,
          },
          b: {
            b2: 100,
            b3: {
              b31: 1,
            },
          },
          c: 10,
        }))
        .toJS(),
    ).toEqual({
      a: {
        a1: 1,
      },
      b: {
        b1: 10,
        b2: 100,
        b3: {
          b31: 1,
        },
      },
      c: 10,
    });
    
    // 깊은 수준의 비교를 지원해준다
    // K가 Array로 왔으면 더 좋았을 것 같은데... 아쉽네...
    // 복잡한 구조체의 Combine이 필요한 경우 (ex. Tree의 일부 값이 변경되는 경우?) 유용할 것 같다.
    // 1. {} 와 {} 의 경우에는 자동으로 합친다
    // 2. V 와 V 가 충돌하는 경우 알린다
    // 3. V 와 {} 가 충돌하는 경우 알린다
    expect(
      <Map<string, number | object>>fromJS({
        a: {
          a1: 10,
          a2: 3,
        },
        b: {
          b1: 10,
          b3: {
            b31: 100,
          },
        },
      })
        .mergeDeepWith(
          (oldVal, newVal, k) => {
            // a1 10 1
            // a2 3 Map { "a21": 3 }
            // b31 100 1
            return typeof oldVal === 'number' && typeof newVal === 'number'
              ? oldVal > newVal
                ? oldVal
                : newVal
              : newVal;
          },
          fromJS({
            a: {
              a1: 1,
              a2: {
                a21: 3,
              },
            },
            b: {
              b2: 100,
              b3: {
                b31: 1,
              },
            },
            c: 10,
          }))
        .toJS(),
    ).toEqual({
      a: {
        a1: 10,
        a2: {
          a21: 3,
        },
      },
      b: {
        b1: 10,
        b2: 100,
        b3: {
          b31: 100,
        },
      },
      c: 10,
    });
  });
  
  it('Deep persistent changes', () => {
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
    
    expect(
      tree
        .setIn(['children', 0, 'children', 0, 'd'], 100)
        .getIn(['children', 0, 'children', 0, 'd']),
    ).toEqual(100);
    
    expect(
      tree
        .setIn(['children', 0, 'children', 0, 'c'], 'c-xxx')
        .getIn(['children', 0, 'children', 0, 'c']),
    ).toEqual('c-xxx');
    
    expect(
      tree
        .deleteIn(['children', 0, 'children', 0, 'c'])
        .getIn(['children', 0, 'children', 0, 'c']),
    ).toBeUndefined();
    
    // Indexed를 지우면 밀려서 올라온다
    expect(
      tree
        .deleteIn(['children', 0, 'children', 0])
        .getIn(['children', 0, 'children', 0, 'c']),
    ).toEqual('c-112');
    
    expect(
      tree
        .updateIn(['children', 0, 'children', 0, 'c'], (c: string) => c + '!!!')
        .getIn(['children', 0, 'children', 0, 'c']),
    ).toEqual('c-111!!!');
    
    // 특정 Key Path를 기준으로 Merge를 작동시킨다
    // 일정 영역의 데이터를 Update 할 때 도움이 될 것 같다.
    // Deep이 아니기 때문에 특정 Key Path의 1단계만 Merge 된다
    expect(
      <Map<string, number | object>>fromJS({
        a: {
          a1: 1,
        },
        b: {
          b2: 100,
          b3: {
            b31: 1,
            b32: 5,
            b33: {
              b332: 10,
              b333: 4,
            },
          },
        },
        c: 10,
      })
        .mergeIn(
          ['b', 'b3'],
          fromJS({
            b31: 100,
            b33: {
              b334: 100,
            },
          }),
        )
        .toJS(),
    ).toEqual({
      a: {
        a1: 1,
      },
      b: {
        b2: 100,
        b3: {
          b31: 100,
          b32: 5,
          b33: {
            b334: 100,
          },
        },
      },
      c: 10,
    });
    
    // Deep이 적용된다
    expect(
      <Map<string, number | object>>fromJS({
        a: {
          a1: 1,
        },
        b: {
          b2: 100,
          b3: {
            b31: 1,
            b32: 5,
            b33: {
              b332: 10,
              b333: 4,
            },
          },
        },
        c: 10,
      })
        .mergeDeepIn(
          ['b', 'b3'],
          fromJS({
            b31: 100,
            b33: {
              b334: 100,
            },
          }),
        )
        .toJS(),
    ).toEqual({
      a: {
        a1: 1,
      },
      b: {
        b2: 100,
        b3: {
          b31: 100,
          b32: 5,
          b33: {
            b332: 10,
            b333: 4,
            b334: 100,
          },
        },
      },
      c: 10,
    });
  });
});