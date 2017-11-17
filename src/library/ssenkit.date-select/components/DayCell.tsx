import * as moment from 'moment';
import * as React from 'react';

export interface Props {
  date: moment.Moment;
  selectedDay: moment.MomentInput;
  startDay: moment.MomentInput;
  endDay: moment.MomentInput;
  today: moment.MomentInput;
  disableBefore: moment.MomentInput;
  disableAfter: moment.MomentInput;
  onClick: (date: moment.Moment) => void;
}

interface TDProps {
  className: string;
  onClick?: () => void;
}

export default ({date, selectedDay, startDay, endDay, today, disableBefore, disableAfter, onClick}: Props) => {
  const disabled: boolean = (disableBefore && date.isBefore(disableBefore, 'day')) || (disableAfter && date.isAfter(disableAfter, 'day'));
  const selected: boolean = date.isSame(selectedDay, 'day');
  
  const styles: string[] = [];
  
  if (date.isBefore(startDay, 'day')) styles.push('before-month');
  if (date.isAfter(endDay, 'day')) styles.push('after-month');
  if (date.isSame(today, 'day')) styles.push('today');
  if (selected) styles.push('selected');
  if (disabled) styles.push('disabled');
  
  const props: TDProps = {
    className: styles.join(' '),
  };
  
  if (!disabled && !selected) props.onClick = () => onClick(date);
  
  return <td {...props}>{date.format('D')}</td>;
};