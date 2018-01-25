import { range } from 'd3-array';
import * as moment from 'moment';
import * as React from 'react';
import DayCell, { Props as DayCellProps } from './DayCell';
import isSame from './isSame';
import toMoment from './toMoment';
import MonthSelector from './MonthSelector';
import './DateSelector.scss';

export interface Props {
  className?: string;
  
  date: moment.MomentInput;
  onChange: (date: Date) => void;
  
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
}

export interface State {
  view?: moment.Moment;
  selected?: moment.Moment;
  disableBefore?: moment.Moment;
  disableAfter?: moment.Moment;
}

interface PrevMonthButtonProps {
  date: moment.Moment;
  disableBefore: moment.MomentInput;
  onClick: (date: moment.Moment) => void;
}

interface NextMonthButtonProps {
  date: moment.Moment;
  disableAfter: moment.MomentInput;
  onClick: (date: moment.Moment) => void;
}

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const PrevMonthButton: React.StatelessComponent<PrevMonthButtonProps> = ({date, disableBefore, onClick}: PrevMonthButtonProps) => {
  const disabled: boolean = disableBefore && date.isSameOrBefore(disableBefore, 'month');
  const props: ButtonProps = {};
  
  if (!disabled) {
    props.onClick = () => onClick(date.clone().subtract(1, 'month'));
  } else {
    props.disabled = true;
  }
  
  return (
    <button {...props}>
      <span className="fa fa-chevron-left" title="Previous Month"/>
    </button>
  );
};

const NextMonthButton: React.StatelessComponent<NextMonthButtonProps> = ({date, disableAfter, onClick}: NextMonthButtonProps) => {
  const disabled: boolean = disableAfter && date.isSameOrAfter(disableAfter, 'month');
  const props: ButtonProps = {};
  
  if (!disabled) {
    props.onClick = () => onClick(date.clone().add(1, 'month'));
  } else {
    props.disabled = true;
  }
  
  return (
    <button {...props}>
      <span className="fa fa-chevron-right" title="Next Month"/>
    </button>
  );
};

export default class extends React.Component<Props, State> {
  static defaultProps: object = {
    className: '',
  };
  
  render() {
    const {view, selected: selectedDay, disableBefore, disableAfter} = this.state;
    const today: moment.Moment = moment();
    const startDayOfMonth: moment.Moment = view.clone().startOf('month');
    const endDayOfMonth: moment.Moment = view.clone().endOf('month');
    
    const itr: moment.Moment = startDayOfMonth.clone().startOf('week');
    
    let row: React.ReactElement<DayCellProps>[] = []; // of <DayCell>
    const rows: JSX.Element[] = []; // of <tr>
    
    while (itr.isSameOrBefore(endDayOfMonth.clone().endOf('week'), 'day')) {
      // Create Day Cell
      row.push(<DayCell key={itr.format('YYYYMMDD')}
                        date={itr.clone()}
                        selectedDay={selectedDay}
                        startDay={startDayOfMonth}
                        endDay={endDayOfMonth}
                        today={today}
                        disableBefore={disableBefore}
                        disableAfter={disableAfter}
                        onClick={this.onDayClick}/>);
      
      // Week break
      if (itr.day() === 6) {
        rows.push(<tr key={itr.format('W')}>{row}</tr>);
        row = [];
      }
      
      itr.add(1, 'day');
    }
    
    range(rows.length, 6).forEach(() => {
      rows.push(
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>,
      );
    });
    
    return (
      <div className={'DateSelector ' + this.props.className}>
        <div role="header">
          <PrevMonthButton date={view}
                           disableBefore={disableBefore}
                           onClick={this.changeView}/>
          <MonthSelector date={view}
                         disableBefore={disableBefore}
                         disableAfter={disableAfter}
                         onChange={this.onMonthChange}/>
          <NextMonthButton date={view}
                           disableAfter={disableAfter}
                           onClick={this.changeView}/>
        </div>
        <table role="body">
          <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
  
  componentWillMount() {
    this.propsToState({} as Props, this.props);
  }
  
  componentWillReceiveProps(nextProps: Readonly<Props>) {
    this.propsToState(this.props, nextProps);
  }
  
  propsToState(prevProps: Props, nextProps: Props) {
    const state: State = {};
    let changed: boolean = false;
    
    if (!isSame(prevProps.date, nextProps.date, 'day')) {
      state.view = toMoment(nextProps.date, () => moment(new Date));
      state.selected = toMoment(nextProps.date);
      changed = true;
    }
    
    if (!isSame(prevProps.disableBefore, nextProps.disableBefore, 'day')) {
      state.disableBefore = toMoment(nextProps.disableBefore);
      changed = true;
    }
    
    if (!isSame(prevProps.disableAfter, nextProps.disableAfter, 'day')) {
      state.disableAfter = toMoment(nextProps.disableAfter);
      changed = true;
    }
    
    if (changed) this.setState(state);
  }
  
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>) {
    const prevState: State = this.state;
    return prevState.view !== nextState.view
      || prevState.selected !== nextState.selected
      || prevState.disableBefore !== nextState.disableBefore
      || prevState.disableAfter !== nextState.disableAfter;
  }
  
  changeView = (newMonth: moment.Moment) => {
    this.setState({view: newMonth});
  };
  
  onMonthChange = (year: number, month: number) => {
    this.setState({
      view: this.state.view.clone().year(year).month(month - 1),
    });
  };
  
  onDayClick = (newDate: moment.Moment) => {
    this.props.onChange(newDate.toDate());
  };
}