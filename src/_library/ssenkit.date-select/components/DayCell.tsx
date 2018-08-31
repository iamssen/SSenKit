import * as moment from 'moment';
import * as React from 'react';

export interface Props {
  date: moment.Moment;
  selectedDay: moment.Moment | Date;
  startDay: moment.Moment | Date;
  endDay: moment.Moment | Date;
  today: moment.Moment | Date;
  disableBefore: moment.Moment | Date | undefined;
  disableAfter: moment.Moment | Date | undefined;
  onClick: (date: moment.Moment) => void;
}

export default class extends React.PureComponent<Props, {}> {
  static displayName: string = 'DayCell';
  
  render() {
    const date: moment.Moment = this.props.date.clone().startOf('day');
    //const startDay: moment.Moment = moment(this.props.startDay).startOf('day');
    //const endDay: moment.Moment = moment(this.props.endDay).startOf('day');
    
    const disabled: boolean = (
      this.props.disableBefore !== undefined
      && date.isBefore(this.props.disableBefore, 'day')
    ) || (
      this.props.disableAfter !== undefined
      && date.isAfter(this.props.disableAfter, 'day')
    );
    
    const selected: boolean = date.isSame(this.props.selectedDay, 'day');
    
    const classNames: string[] = [];
    
    if (date.isBefore(this.props.startDay, 'day')) classNames.push('before-month');
    if (date.isAfter(this.props.endDay, 'day')) classNames.push('after-month');
    if (date.isSame(this.props.today, 'day')) classNames.push('today');
    if (selected) classNames.push('selected');
    if (disabled) classNames.push('disabled');
    
    const props: React.HTMLAttributes<HTMLTableCellElement> = {
      className: classNames.join(' '),
    };
    
    if (!disabled && !selected) {
      props.onClick = () => this.props.onClick(date);
    }
    
    return (
      <td {...props}>
        {date.format('D')}
      </td>
    );
  }
}