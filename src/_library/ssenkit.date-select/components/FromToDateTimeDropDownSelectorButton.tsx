import { DateTime } from 'luxon';
import * as React from 'react';
import { FromTo, isFromTo } from '../types';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';

export function dateRangeToString(fromTo: FromTo | undefined, format: string): string {
  if (!fromTo) return '-';
  
  if (typeof fromTo.description === 'string') {
    return fromTo.description;
  } else if (isFromTo(fromTo)) {
    return DateTime.fromJSDate(fromTo.from).toFormat(format) + ' ~ ' + DateTime.fromJSDate(fromTo.to).toFormat(format);
  }
  
  throw new Error(`${fromTo} is not FromTo.`);
}

class Component extends React.PureComponent<FromToDateTimeDropDownSelectorButtonProps, {}> {
  static displayName: string = 'FromToDateTimeDropDownSelectorButton';
  
  render() {
    const {fromTo, progressiveFromTo, children, ...props} = this.props;
    
    return (
      <button className="btn btn-sm white dropdown-toggle"
              aria-busy={progressiveFromTo !== null && progressiveFromTo !== undefined}
              {...props}>
        {
          dateRangeToString(
            progressiveFromTo || fromTo,
            'F',
          )
        }
      </button>
    );
  }
}

export default Component;