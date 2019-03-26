(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{462:function(n,e,t){"use strict";var a=t(449),r=(t(450),t(451),t(452),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(1)),u=t.n(r);function l(n){var e=n.value,t=n.children,r=n.language,l=void 0===r?"none":r;if(!t&&!e)return null;["javascript jsx"].indexOf(l)&&(l="jsx"),["typescript jsx"].indexOf(l)&&(l="tsx"),["sh"].indexOf(l)&&(l="bash"),a.languages[l]||(l="none");var o=a.languages[l]?a.languages[l]:a.languages.js,m=Object(a.highlight)(t||e,o),f="language-"+l;return u.a.createElement("pre",{className:f},u.a.createElement("code",{className:f,dangerouslySetInnerHTML:{__html:m}}))}var o=t(461),m=t.n(o);function f(n){var e=n.text,t=n.children;return u.a.createElement(m.a,{source:e||t,renderers:{code:l}})}t.d(e,"a",function(){return l}),t.d(e,"b",function(){return f})},481:function(n,e){n.exports="# numeral"},482:function(n,e){n.exports="import numeral from 'numeral';\n\ndescribe('numeral', () => {\n  it('Number formatting', () => {\n    // ---------------------------------------------\n    // \uc815\uc218, \uc18c\uc22b\uc810 \uc9c0\uc815\n    // ---------------------------------------------\n    expect(numeral(1000.23423).format('0,0')).toEqual('1,000');\n    expect(numeral(1000.23423).format('0,0.0000')).toEqual('1,000.2342');\n    expect(numeral(1000).format('0,0.0000')).toEqual('1,000.0000');\n    // \uc18c\uc218\uac00 \uc5c6\uc73c\uba74 \ucd9c\ub825 \uc548\ud568\n    expect(numeral(1000).format('0,0.[0000]')).toEqual('1,000');\n    // \uc18c\uc218\uac00 \uc9c0\uc815\ubcf4\ub2e4 \ub9ce\uc73c\uba74 \uc798\ub77c\ub0c4\n    expect(numeral(1000.23423).format('0,0.[000]')).toEqual('1,000.234');\n    // \uc18c\uc218\uac00 \uc9c0\uc815\ubcf4\ub2e4 \uc801\uc73c\uba74 \uadf8\ub300\ub85c \ucd9c\ub825\n    expect(numeral(1000.2).format('0,0.[000]')).toEqual('1,000.2');\n    \n    // ---------------------------------------------\n    // \ud2b9\uc218 \ud45c\uc2dc\n    // ---------------------------------------------\n    // +, - \ud45c\uc2dc\n    expect(numeral(100).format('+0,0')).toEqual('+100');\n    expect(numeral(-100).format('+0,0')).toEqual('-100');\n    // surffix unit - k, m, b, t\n    expect(numeral(12).format('0a')).toEqual('12');\n    expect(numeral(1234).format('0a')).toEqual('1k');\n    expect(numeral(1234567).format('0a')).toEqual('1m');\n    expect(numeral(1234567890).format('0a')).toEqual('1b');\n    expect(numeral(1234567890000).format('0a')).toEqual('1t');\n    expect(numeral(12345678900000000).format('0a')).toEqual('12346t');\n    expect(numeral(1234).format('0.0a')).toEqual('1.2k');\n    expect(numeral(1234).format('0.00a')).toEqual('1.23k');\n    expect(numeral(1000).format('0.0a')).toEqual('1.0k');\n    expect(numeral(1000).format('0.[0]a')).toEqual('1k');\n    // surffix unit - 1st\n    expect(numeral(1).format('0o')).toEqual('1st');\n    expect(numeral(2).format('0o')).toEqual('2nd');\n    expect(numeral(10).format('0o')).toEqual('10th');\n    // bytes\n    expect(numeral(100).format('0b')).toEqual('100B');\n    expect(numeral(1024).format('0b')).toEqual('1KB');\n    expect(numeral(1024).format('0.0b')).toEqual('1.0KB');\n    // percentage\n    expect(numeral(1).format('0%')).toEqual('100%');\n    expect(numeral(0.987).format('0%')).toEqual('99%');\n    expect(numeral(0.98764).format('0.00%')).toEqual('98.76%');\n    expect(numeral(0.9).format('0.[000]%')).toEqual('90%');\n    expect(numeral(0.98282738).format('0.[000]%')).toEqual('98.283%');\n    \n    // ---------------------------------------------\n    // Custom\n    // ---------------------------------------------\n    // zero, null format\n    numeral.zeroFormat('###');\n    numeral.nullFormat('N/A');\n    expect(numeral(0).format('0')).toEqual('###');\n    expect(numeral(null).format('0')).toEqual('N/A');\n    // undefined\ub294 0\uc73c\ub85c \ucde8\uae09\ub41c\ub2e4?\n    expect(numeral(undefined).format('0')).toEqual('###');\n    // \uc804\uc5ed\uc801\uc73c\ub85c \ubcc0\uacbd\ud574\uc57c\ub9cc \ud55c\ub2e4. (\uc65c?)\n    numeral.zeroFormat('-');\n    numeral.nullFormat('-');\n    expect(numeral(0).format('0')).toEqual('-');\n    expect(numeral(null).format('0')).toEqual('-');\n    expect(numeral(undefined).format('0')).toEqual('-');\n    \n    numeral.register('format', 'half', {\n      regexps: {\n        format: /(half)/,\n        unformat: /(half)/,\n      },\n      format: (value: number, format: string, roundingFunction: RoundingFunction) => {\n        // numberToFormat()\uc740 \ubb38\uc790\ub97c \ubb34\uc2dc\ud55c format string\uc744 \ubcf4\ub0b4\uc900\ub2e4\n        // @ts-ignore typings\uc5d0 _ \uc815\uc758\ub418\uc9c0 \uc54a\uc558\uc74c\n        return numeral._.numberToFormat(value / 2, format, roundingFunction) + 'half';\n      },\n      unformat: (text: string) => {\n        // stringToNumber()\ub294 \ubb38\uc790\ub97c \ubb34\uc2dc\ud55c number\ub97c \ubcf4\ub0b4\uc900\ub2e4\n        // @ts-ignore typings\uc5d0 _ \uc815\uc758\ub418\uc9c0 \uc54a\uc558\uc74c\n        return numeral._.stringToNumber(text) * 2;\n      },\n    });\n    \n    expect(numeral(100).format('0half')).toEqual('50half');\n    expect(numeral('51half').value()).toEqual(102);\n  });\n});"},491:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),u=t(462);e.default=function(){return r.a.createElement("div",null,r.a.createElement(u.b,{text:t(481)}),r.a.createElement(u.a,{value:t(482),language:"typescript"}))}}}]);