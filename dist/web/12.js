(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{591:function(e,n){e.exports="import * as numeral from 'numeral';\n\ndescribe('numeral', () => {\n  it('Number formatting', () => {\n    // ---------------------------------------------\n    // 정수, 소숫점 지정\n    // ---------------------------------------------\n    expect(numeral(1000.23423).format('0,0')).toEqual('1,000');\n    expect(numeral(1000.23423).format('0,0.0000')).toEqual('1,000.2342');\n    expect(numeral(1000).format('0,0.0000')).toEqual('1,000.0000');\n    // 소수가 없으면 출력 안함\n    expect(numeral(1000).format('0,0.[0000]')).toEqual('1,000');\n    // 소수가 지정보다 많으면 잘라냄\n    expect(numeral(1000.23423).format('0,0.[000]')).toEqual('1,000.234');\n    // 소수가 지정보다 적으면 그대로 출력\n    expect(numeral(1000.2).format('0,0.[000]')).toEqual('1,000.2');\n    \n    // ---------------------------------------------\n    // 특수 표시\n    // ---------------------------------------------\n    // +, - 표시\n    expect(numeral(100).format('+0,0')).toEqual('+100');\n    expect(numeral(-100).format('+0,0')).toEqual('-100');\n    // surffix unit - k, m, b, t\n    expect(numeral(12).format('0a')).toEqual('12');\n    expect(numeral(1234).format('0a')).toEqual('1k');\n    expect(numeral(1234567).format('0a')).toEqual('1m');\n    expect(numeral(1234567890).format('0a')).toEqual('1b');\n    expect(numeral(1234567890000).format('0a')).toEqual('1t');\n    expect(numeral(12345678900000000).format('0a')).toEqual('12346t');\n    expect(numeral(1234).format('0.0a')).toEqual('1.2k');\n    expect(numeral(1234).format('0.00a')).toEqual('1.23k');\n    expect(numeral(1000).format('0.0a')).toEqual('1.0k');\n    expect(numeral(1000).format('0.[0]a')).toEqual('1k');\n    // surffix unit - 1st\n    expect(numeral(1).format('0o')).toEqual('1st');\n    expect(numeral(2).format('0o')).toEqual('2nd');\n    expect(numeral(10).format('0o')).toEqual('10th');\n    // bytes\n    expect(numeral(100).format('0b')).toEqual('100B');\n    expect(numeral(1024).format('0b')).toEqual('1KB');\n    expect(numeral(1024).format('0.0b')).toEqual('1.0KB');\n    // percentage\n    expect(numeral(1).format('0%')).toEqual('100%');\n    expect(numeral(0.987).format('0%')).toEqual('99%');\n    expect(numeral(0.98764).format('0.00%')).toEqual('98.76%');\n    expect(numeral(0.9).format('0.[000]%')).toEqual('90%');\n    expect(numeral(0.98282738).format('0.[000]%')).toEqual('98.283%');\n    \n    // ---------------------------------------------\n    // Custom\n    // ---------------------------------------------\n    // zero, null format\n    numeral.zeroFormat('###');\n    numeral.nullFormat('N/A');\n    expect(numeral(0).format('0')).toEqual('###');\n    expect(numeral(null).format('0')).toEqual('N/A');\n    // undefined는 0으로 취급된다?\n    expect(numeral(undefined).format('0')).toEqual('###');\n    // 전역적으로 변경해야만 한다. (왜?)\n    numeral.zeroFormat('-');\n    numeral.nullFormat('-');\n    expect(numeral(0).format('0')).toEqual('-');\n    expect(numeral(null).format('0')).toEqual('-');\n    expect(numeral(undefined).format('0')).toEqual('-');\n    \n    numeral.register('format', 'half', {\n      regexps: {\n        format: /(half)/,\n        unformat: /(half)/,\n      },\n      format: (value, format, roundingFunction) => {\n        // numberToFormat()은 문자를 무시한 format string을 보내준다\n        // @ts-ignore\n        return numeral._.numberToFormat(value / 2, format, roundingFunction) + 'half';\n      },\n      unformat: (text) => {\n        // stringToNumber()는 문자를 무시한 number를 보내준다\n        // @ts-ignore\n        return numeral._.stringToNumber(text) * 2;\n      },\n    });\n    \n    expect(numeral(100).format('0half')).toEqual('50half');\n    expect(numeral('51half').value()).toEqual(102);\n  });\n});"},596:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a(35);n.default=function(){return t.createElement("div",{className:"app-body"},t.createElement("div",{className:"page-header"},t.createElement("div",{className:"row"},t.createElement("h1",null,t.createElement("code",null,"Numeral.js Test")))),t.createElement("div",{className:"page-body ph-30 mv-30"},t.createElement("div",{className:"box"},t.createElement("div",{className:"box-body"},t.createElement(r.d,{source:a(591)})))))}}}]);