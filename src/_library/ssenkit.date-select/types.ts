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

// tslint:disable
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

// tslint:enable

