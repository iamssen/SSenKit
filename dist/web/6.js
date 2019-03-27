(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{462:function(e,n,a){"use strict";var t=a(449),r=(a(450),a(451),a(452),a(453),a(454),a(455),a(456),a(457),a(458),a(459),a(460),a(1)),s=a.n(r);function c(e){var n=e.value,a=e.children,r=e.language,c=void 0===r?"none":r;if(!a&&!n)return null;["javascript jsx"].indexOf(c)&&(c="jsx"),["typescript jsx"].indexOf(c)&&(c="tsx"),["sh"].indexOf(c)&&(c="bash"),t.languages[c]||(c="none");var d=t.languages[c]?t.languages[c]:t.languages.js,o=Object(t.highlight)(a||n,d),u="language-"+c;return s.a.createElement("pre",{className:u},s.a.createElement("code",{className:u,dangerouslySetInnerHTML:{__html:o}}))}var d=a(461),o=a.n(d);function u(e){var n=e.text,a=e.children;return s.a.createElement(o.a,{source:n||a,renderers:{code:c}})}a.d(n,"a",function(){return c}),a.d(n,"b",function(){return u})},473:function(e,n){e.exports="# immer\n\n1. `object`, `array`\uc758 \uacbd\uc6b0 \uc644\ubcbd\ud558\uac8c \uc791\ub3d9\ud55c\ub2e4\n2. `Set`, `Map`\uc740 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4. `new Set(originSet)`\uacfc \uac19\uc774 \uc0ac\uc6a9\ud558\ub294\uac8c \ub354 \ub0ab\ub2e4\n3. `mobx`\uc758 \uacbd\uc6b0 `@observable.ref`\ub97c \uc0ac\uc6a9\ud574\uc11c `Observable Array`\ub85c \uc804\ud658\ub418\uc9c0 \uc54a\uac8c \ucc98\ub9ac\ud558\uba74 \ubb38\uc81c \uc5c6\ub2e4"},474:function(e,n){e.exports="import produce from 'immer';\nimport { action, IValueDidChange, observable, observe } from 'mobx';\n\ndescribe('immer', () => {\n  it('Test Set, Map', () => {\n    const set1: Set<string> = new Set(['a', 'b', 'c']);\n    //const set2: Set<string> = produce(set1, (draft: Set<string>) => {\n    //  draft.delete('b');\n    //  draft.add('d');\n    //});\n    const set2: Set<string> = new Set<string>(set1);\n    set2.delete('b');\n    set2.add('d');\n    \n    expect(set1 === set2).toBeFalsy();\n    expect(Array.from(set1)).toEqual(['a', 'b', 'c']);\n    expect(Array.from(set2)).toEqual(['a', 'c', 'd']);\n    \n    const map1: Map<string, number> = new Map([['a', 1], ['b', 2], ['c', 3]]);\n    //const map2: Map<string, number> = produce(map1, (draft: Map<string, number>) => {\n    //  map2.delete('b');\n    //  map2.set('d', 4);\n    //});\n    const map2: Map<string, number> = new Map<string, number>(map1);\n    map2.delete('b');\n    map2.set('d', 4);\n    \n    expect(map1 === map2).toBeFalsy();\n    expect(Array.from(map1.keys())).toEqual(['a', 'b', 'c']);\n    expect(Array.from(map1.values())).toEqual([1, 2, 3]);\n    expect(Array.from(map2.keys())).toEqual(['a', 'c', 'd']);\n    expect(Array.from(map2.values())).toEqual([1, 3, 4]);\n  });\n  \n  it('Test basic', () => {\n    const arr: string[] = ['a', 'b', 'c'];\n    expect(produce(arr, (draft: string[]) => {\n      draft.push('d', 'e'); // ['a', 'b', 'c', 'd', 'e']\n      return draft;\n    })).toEqual(['a', 'b', 'c', 'd', 'e']);\n    \n    const obj: object = {a: 1, b: 2, c: 3};\n    expect(produce(obj, (draft: object) => {\n      draft['a'] = 3; // {a: 3, b: 2, c: 3}\n      delete draft['c']; // {a: 3, b: 2}\n      draft['d'] = 100; // {a: 3, b: 2, d: 100}\n      return draft;\n    })).toEqual({a: 3, b: 2, d: 100});\n    \n    const str: string = 'a';\n    expect(produce(str, (draft: string) => {\n      return draft + 'ccc'; // 'accc'\n    })).toEqual('accc');\n  });\n  \n  it('Test mobx', () => {\n    class Data {\n      // @observable.ref \ub97c \uc0ac\uc6a9\ud574\uc11c observable array\ub85c \ubcc0\ud658\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud55c\ub2e4\n      @observable.ref arr: string[] = ['a', 'b', 'c'];\n      \n      @action update = (append: string) => {\n        this.arr = produce(this.arr, (draft: string[]) => {\n          draft.push(append);\n        });\n      };\n    }\n    \n    const data: Data = new Data();\n    \n    expect(Array.isArray(data.arr)).toBeTruthy();\n    expect(data.arr).toEqual(['a', 'b', 'c']);\n    \n    data.update('d');\n    \n    expect(Array.isArray(data.arr)).toBeTruthy();\n    expect(data.arr).toEqual(['a', 'b', 'c', 'd']);\n    \n    return new Promise((resolve: () => void) => {\n      observe(data, 'arr', ({oldValue, newValue}: IValueDidChange<string[]>) => {\n        expect(oldValue).toEqual(['a', 'b', 'c', 'd']);\n        expect(newValue).toEqual(['a', 'b', 'c', 'd', 'e']);\n        resolve();\n      });\n      \n      setTimeout(() => {\n        data.update('e');\n      }, 200);\n    });\n  });\n  \n  it('Test deep', () => {\n    const arr: (string | string[])[] = ['a', ['b', 'c']];\n    expect(produce(arr, (draft: (string | string[])[]) => {\n      (draft[1] as string[]).splice(1, 1); // ['a', ['b']]\n      (draft[1] as string[]).push('d'); // ['a', ['b', 'd']]\n      draft.push(['e']); // ['a', ['b', 'd'], ['e']]\n      draft.push('f'); // ['a', ['b', 'd'], ['e'], 'f']\n    })).toEqual(['a', ['b', 'd'], ['e'], 'f']);\n    \n    const obj: object = {\n      a: {\n        b: 1,\n        c: {\n          d: 2,\n        },\n      },\n      e: 3,\n    };\n    \n    expect(produce(obj, (draft: object) => {\n      delete draft['a']['b']; // {a: {c: {d: 2}}, e: 3}\n      draft['a']['c']['d'] = 5; // {a: {c: {d: 5}}, e: 3}\n      draft['a']['c']['f'] = {}; // {a: {c: {d: 5, f: {}}}, e: 3}\n      draft['a']['c']['f']['g'] = 4; // {a: {c: {d: 5, f: {g: 4}}}, e: 3}\n    })).toEqual({\n      a: {\n        c: {\n          d: 5,\n          f: {\n            g: 4,\n          },\n        },\n      },\n      e: 3,\n    });\n  });\n});"},491:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),s=a(462);n.default=function(){return r.a.createElement("div",null,r.a.createElement(s.b,{text:a(473)}),r.a.createElement(s.a,{value:a(474),language:"typescript"}))}}}]);