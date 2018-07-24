import { DateTime } from 'luxon';
import * as React from 'react';
import { DateRange, From, FromTo, isFrom, isFromTo, isLatest, Latest } from '../types';
import { DateRangeDropDownSelectorButtonProps } from './DateRangeDropDownSelectorButtonProps';

export function dateRangeToString(dateRange: DateRange | undefined, format: string): string {
  if (!dateRange) return '-';
  
  if (typeof dateRange.description === 'string') {
    return dateRange.description;
  }
  else if (isLatest(dateRange)) {
    const latest: Latest = dateRange as Latest;
    return 'date-range-' + latest.latest;
  }
  else if (isFromTo(dateRange)) {
    const fromTo: FromTo = dateRange as FromTo;
    return DateTime.fromJSDate(fromTo.from).toFormat(format) + ' ~ ' + DateTime.fromJSDate(fromTo.to).toFormat(format);
  }
  else if (isFrom(dateRange)) {
    const from: From = dateRange as From;
    return DateTime.fromJSDate(from.from).toFormat(format) + ' ~';
  }
  
  //if (isPeriod(dateRange)) {
  //  const period: Period = dateRange as Period;
  //}
  
  throw new Error('알 수 없는 DateRange 형식. description도 없고, FromTo나 From도 아니다.');
}

class Component extends React.PureComponent<DateRangeDropDownSelectorButtonProps, {}> {
  static displayName: string = 'DateRangeDropDownSelectorButton';
  
  render() {
    const {dateRange, progressiveDateRange, children, ...props} = this.props;
    
    return (
      <button className="btn btn-sm white dropdown-toggle"
              aria-busy={progressiveDateRange !== null && progressiveDateRange !== undefined}
              {...props}>
        {
          dateRangeToString(
            progressiveDateRange || dateRange,
            'F',
          )
        }
      </button>
    );
  }
};

export default Component as React.ComponentType<DateRangeDropDownSelectorButtonProps>;