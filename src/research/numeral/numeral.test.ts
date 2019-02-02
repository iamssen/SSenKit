import numeral from 'numeral';

describe('numeral', () => {
  it('Number formatting', () => {
    // ---------------------------------------------
    // 정수, 소숫점 지정
    // ---------------------------------------------
    expect(numeral(1000.23423).format('0,0')).toEqual('1,000');
    expect(numeral(1000.23423).format('0,0.0000')).toEqual('1,000.2342');
    expect(numeral(1000).format('0,0.0000')).toEqual('1,000.0000');
    // 소수가 없으면 출력 안함
    expect(numeral(1000).format('0,0.[0000]')).toEqual('1,000');
    // 소수가 지정보다 많으면 잘라냄
    expect(numeral(1000.23423).format('0,0.[000]')).toEqual('1,000.234');
    // 소수가 지정보다 적으면 그대로 출력
    expect(numeral(1000.2).format('0,0.[000]')).toEqual('1,000.2');
    
    // ---------------------------------------------
    // 특수 표시
    // ---------------------------------------------
    // +, - 표시
    expect(numeral(100).format('+0,0')).toEqual('+100');
    expect(numeral(-100).format('+0,0')).toEqual('-100');
    // surffix unit - k, m, b, t
    expect(numeral(12).format('0a')).toEqual('12');
    expect(numeral(1234).format('0a')).toEqual('1k');
    expect(numeral(1234567).format('0a')).toEqual('1m');
    expect(numeral(1234567890).format('0a')).toEqual('1b');
    expect(numeral(1234567890000).format('0a')).toEqual('1t');
    expect(numeral(12345678900000000).format('0a')).toEqual('12346t');
    expect(numeral(1234).format('0.0a')).toEqual('1.2k');
    expect(numeral(1234).format('0.00a')).toEqual('1.23k');
    expect(numeral(1000).format('0.0a')).toEqual('1.0k');
    expect(numeral(1000).format('0.[0]a')).toEqual('1k');
    // surffix unit - 1st
    expect(numeral(1).format('0o')).toEqual('1st');
    expect(numeral(2).format('0o')).toEqual('2nd');
    expect(numeral(10).format('0o')).toEqual('10th');
    // bytes
    expect(numeral(100).format('0b')).toEqual('100B');
    expect(numeral(1024).format('0b')).toEqual('1KB');
    expect(numeral(1024).format('0.0b')).toEqual('1.0KB');
    // percentage
    expect(numeral(1).format('0%')).toEqual('100%');
    expect(numeral(0.987).format('0%')).toEqual('99%');
    expect(numeral(0.98764).format('0.00%')).toEqual('98.76%');
    expect(numeral(0.9).format('0.[000]%')).toEqual('90%');
    expect(numeral(0.98282738).format('0.[000]%')).toEqual('98.283%');
    
    // ---------------------------------------------
    // Custom
    // ---------------------------------------------
    // zero, null format
    numeral.zeroFormat('###');
    numeral.nullFormat('N/A');
    expect(numeral(0).format('0')).toEqual('###');
    expect(numeral(null).format('0')).toEqual('N/A');
    // undefined는 0으로 취급된다?
    expect(numeral(undefined).format('0')).toEqual('###');
    // 전역적으로 변경해야만 한다. (왜?)
    numeral.zeroFormat('-');
    numeral.nullFormat('-');
    expect(numeral(0).format('0')).toEqual('-');
    expect(numeral(null).format('0')).toEqual('-');
    expect(numeral(undefined).format('0')).toEqual('-');
    
    numeral.register('format', 'half', {
      regexps: {
        format: /(half)/,
        unformat: /(half)/,
      },
      format: (value: number, format: string, roundingFunction: RoundingFunction) => {
        // numberToFormat()은 문자를 무시한 format string을 보내준다
        // @ts-ignore typings에 _ 정의되지 않았음
        return numeral._.numberToFormat(value / 2, format, roundingFunction) + 'half';
      },
      unformat: (text: string) => {
        // stringToNumber()는 문자를 무시한 number를 보내준다
        // @ts-ignore typings에 _ 정의되지 않았음
        return numeral._.stringToNumber(text) * 2;
      },
    });
    
    expect(numeral(100).format('0half')).toEqual('50half');
    expect(numeral('51half').value()).toEqual(102);
  });
});