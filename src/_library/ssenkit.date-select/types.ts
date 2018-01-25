import * as moment from 'moment';

export interface FromTo {
  from: Date;
  to: Date;
  description?: string;
}

export interface From {
  from: Date;
  description?: string;
}

export interface Period {
  second: number;
  description?: string;
}

export interface Latest {
  latest: string;
  description?: string;
}

export type DateRange = FromTo | From | Period | Latest;

/* tslint:disable */
// param의 type이 맞는지 확인하기 위한 validator.
// 들어오는 param은 any 이어야 한다.
export function isFromTo(obj: any): boolean {
  return moment.isDate(obj.from) && moment.isDate(obj.to);
}

export function isFrom(obj: any): boolean {
  return moment.isDate(obj.from);
}

export function isPeriod(obj: any): boolean {
  return typeof obj.second === 'number';
}

export function isLatest(obj: any): boolean {
  return typeof obj.latest === 'string';
}

/* tslint:enable */

export interface paramRange {
  startTime: string,
  endTime: string
}
;

export function dateRangeToParamRange(dateRange: DateRange) {
  const format: string = 'YYYYMMDDHHmm';
  if (!dateRange) {
    return {
      startTime: moment().format(format),
      endTime: moment().format(format),
    };
  }
  
  if (isFromTo(dateRange)) {
    const fromTo: FromTo = dateRange as FromTo;
    return {
      startTime: moment(fromTo.from).format(format),
      endTime: moment(fromTo.to).format(format),
    };
  }
  
  if (isFrom(dateRange)) {
    const from: From = dateRange as From;
    return {
      startTime: moment(from.from).format(format),
      endTime: moment().format(format),
    };
  }
  
  if (isPeriod(dateRange)) {
    const period: Period = dateRange as Period;
    return {
      startTime: moment().subtract(period.second, 'seconds').format(format),
      endTime: moment().format(format),
    };
  }
  
  if (isLatest(dateRange)) {
    const latest: Latest = dateRange as Latest;
    const [_, value, unit] = /([0-9]+)([a-z]+)/.exec(latest.latest);
    //const unit = latest.latest.slice(-1);
    //const value = latest.latest.slice(0, -1);
    const endTime: string = moment().format(format);
    let startTime: string;
    
    switch (unit) {
      case 'mi':
        startTime = moment().subtract(value, 'minutes').format(format);
        break;
      case 'h':
        startTime = moment().subtract(value, 'hours').format(format);
        break;
      case 'd':
        startTime = moment().subtract(value, 'days').format(format);
        break;
      case 'w' :
        startTime = moment().subtract(value, 'weeks').format(format);
        break;
      case 'm' :
        startTime = moment().subtract(value, 'months').format(format);
        break;
      case 'y':
        startTime = moment().subtract(value, 'years').format(format);
        break;
      default:
        throw new Error('알 수 없는 날짜 형식');
    }
    
    return {
      startTime,
      endTime,
    };
  }
}

