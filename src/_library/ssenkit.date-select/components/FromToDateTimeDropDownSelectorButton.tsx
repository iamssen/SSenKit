import * as moment from 'moment';
import * as React from 'react';
import { FromTo, isFromTo } from '../types';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';

export function dateRangeToString(fromTo: FromTo | undefined, format: string): string {
  if (!fromTo) return '-';
  
  if (typeof fromTo.description === 'string') {
    return fromTo.description;
  } else if (isFromTo(fromTo)) {
    return moment(fromTo.from).format(format) + ' ~ ' + moment(fromTo.to).format(format);
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
            'LLLL', // TODO date format 점검
          )
        }
      </button>
    );
  }
}

export default Component;