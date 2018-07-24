import * as React from 'react';
import { DateTime } from 'luxon';

export interface Props {
  date: DateTime;
  selectedDay: DateTime;
  startDay: DateTime;
  endDay: DateTime;
  today: DateTime;
  disableBefore: DateTime | undefined;
  disableAfter: DateTime | undefined;
  onClick: (date: DateTime) => void;
}

export default class extends React.PureComponent<Props, {}> {
  static displayName: string = 'DayCell';
  
  render() {
    const date: DateTime = this.props.date.startOf('day');
    const startDay: DateTime = this.props.startDay.startOf('day');
    const endDay: DateTime = this.props.endDay.startOf('day');
    
    const disabled: boolean = (
      this.props.disableBefore !== undefined
      && date.startOf('day') < this.props.disableBefore.startOf('day')
    ) || (
      this.props.disableAfter !== undefined
      && date.startOf('day') > this.props.disableAfter.startOf('day')
    );
    
    const selected: boolean = this.props.date.hasSame(this.props.selectedDay, 'day');
    
    const classNames: string[] = [];
    
    if (date < startDay) classNames.push('before-month');
    if (date > endDay) classNames.push('after-month');
    if (date.hasSame(this.props.today, 'day')) classNames.push('today');
    if (selected) classNames.push('selected');
    if (disabled) classNames.push('disabled');
    
    const props: React.HTMLAttributes<HTMLTableCellElement> = {
      className: classNames.join(' '),
    };
    
    if (!disabled && !selected) {
      props.onClick = () => this.props.onClick(this.props.date);
    }
    
    return (
      <td {...props}>
        {date.toFormat('d')}
      </td>
    );
  }
}