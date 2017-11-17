import * as moment from 'moment';
import * as React from 'react';
import { FromTo, isFromTo } from '../types';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';

export function dateRangeToString(fromTo: FromTo, format: string): string {
  if (!fromTo) return '-';
  
  if (typeof fromTo.description === 'string') {
    return fromTo.description;
  }
  else if (isFromTo(fromTo)) {
    return moment(fromTo.from).format(format) + ' ~ ' + moment(fromTo.to).format(format);
  }
  
  throw new Error('FromTo 형식이 아니다.');
}

class Component extends React.Component<FromToDateTimeDropDownSelectorButtonProps, {}> {
  render() {
    const {fromTo, progressiveFromTo, children, ...props} = this.props;
    const isProgressive: boolean = progressiveFromTo !== null && progressiveFromTo !== undefined;
    return (
      <button className="btn btn-sm white dropdown-toggle" aria-busy={isProgressive} {...props}>
        {dateRangeToString(isProgressive ? progressiveFromTo : fromTo, 'YYYY년 MM월 DD일 HH:mm:ss')}
      </button>
    );
  }
}

export default Component;