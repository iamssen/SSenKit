import { range } from 'd3-array';
import * as moment from 'moment';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import './DateSelector.scss';
import DayCell, { Props as DayCellProps } from './DayCell';
import MonthSelector from './MonthSelector';

export interface Props {
  date: moment.Moment | Date;
  onChange: (date: Date) => void;
  
  disableBefore?: moment.Moment | Date;
  disableAfter?: moment.Moment | Date;
}

interface InternalProps extends ContextState {
}

interface State {
  view: moment.Moment; // Month on calendar
  date: moment.Moment; // Selected day
  
  disableBefore: moment.Moment;
  disableAfter: moment.Moment;
}

const defaultDisableBefore: moment.Moment = moment().subtract(10, 'years').startOf('year');
const defaultDisableAfter: moment.Moment = moment().add(10, 'years').endOf('year');

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'DateSelector';
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      view: moment(props.date),
      date: moment(props.date),
      disableBefore: props.disableBefore
        ? moment(props.disableBefore)
        : defaultDisableBefore,
      disableAfter: props.disableAfter
        ? moment(props.disableAfter)
        : defaultDisableAfter,
    };
  }
  
  render() {
    const {view, date: selectedDay, disableBefore, disableAfter} = this.state;
    const today: moment.Moment = moment();
    const startDayOfMonth: moment.Moment = view.clone().startOf('month');
    const endDayOfMonth: moment.Moment = view.clone().endOf('month');
    
    const itr: moment.Moment = startDayOfMonth.clone().startOf('week');
    
    let row: React.ReactElement<DayCellProps>[] = []; // of <DayCell>
    const rows: JSX.Element[] = []; // of <tr>
    
    while (itr.isSameOrBefore(endDayOfMonth.clone().endOf('week'), 'day')) {
      // Create Day Cell
      row.push(
        <DayCell key={itr.format('YYYYMMDD')}
                 date={itr.clone()}
                 selectedDay={selectedDay}
                 startDay={startDayOfMonth}
                 endDay={endDayOfMonth}
                 today={today}
                 disableBefore={disableBefore}
                 disableAfter={disableAfter}
                 onClick={this.onDayClick}/>,
      );
      
      // Week break
      if (itr.day() === 6) {
        rows.push((
          <tr key={itr.format('W')}>
            {row}
          </tr>
        ));
        
        row = [];
      }
      
      itr.add(1, 'day');
    }
    
    range(rows.length, 6).forEach(i => {
      rows.push(
        <tr key={'blank-week-' + i}>
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
      <div className={'DateSelector ' + this.props.config.dateSelectorClassName}>
        <div role="header">
          <PrevMonthButton date={view}
                           disableBefore={disableBefore}
                           onClick={this.changeView}>
            {this.props.config.dateSelectorPrevMonthButton}
          </PrevMonthButton>
          
          <MonthSelector date={view}
                         disableBefore={disableBefore}
                         disableAfter={disableAfter}
                         onChange={this.onMonthChange}/>
          
          <NextMonthButton date={view}
                           disableAfter={disableAfter}
                           onClick={this.changeView}>
            {this.props.config.dateSelectorNextMonthButton}
          </NextMonthButton>
        </div>
        
        <table role="body">
          <thead>
          <tr>
            <th>
              {this.props.config.dateSelectorDayLabelFunction('sun')}
            </th>
            <th>
              {this.props.config.dateSelectorDayLabelFunction('mon')}
            </th>
            <th>
              {this.props.config.dateSelectorDayLabelFunction('tue')}
            </th>
            <th>
              {this.props.config.dateSelectorDayLabelFunction('wed')}
            </th>
            <th>
              {this.props.config.dateSelectorDayLabelFunction('thu')}
            </th>
            <th>
              {this.props.config.dateSelectorDayLabelFunction('fri')}
            </th>
            <th>
              {this.props.config.dateSelectorDayLabelFunction('sat')}
            </th>
          </tr>
          </thead>
          
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps, prevState: State): Partial<State> {
    const state: Partial<State> = {};
    
    if (!prevState.date.isSame(nextProps.date, 'day')) {
      state.view = moment(nextProps.date);
      state.date = moment(nextProps.date);
    }
    
    
    if (!prevState.disableBefore.isSame(nextProps.disableBefore, 'day')) {
      state.disableBefore = nextProps.disableBefore
        ? moment(nextProps.disableBefore)
        : defaultDisableBefore;
    }
    
    if (!prevState.disableAfter.isSame(nextProps.disableAfter, 'day')) {
      state.disableAfter = nextProps.disableAfter
        ? moment(nextProps.disableAfter)
        : defaultDisableAfter;
    }
    
    return state;
  }
  
  shouldComponentUpdate(nextProps: Readonly<Props & InternalProps>, nextState: Readonly<State>) {
    return this.state.view !== nextState.view
      || this.state.date !== nextState.date
      || this.state.disableBefore !== nextState.disableBefore
      || this.state.disableAfter !== nextState.disableAfter;
  }
  
  changeView = (newMonth: moment.Moment) => {
    this.setState({
      view: newMonth,
    });
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

export default withConsumer(Component) as React.ComponentType<Props>;

interface PrevMonthButtonProps {
  date: moment.Moment;
  disableBefore: moment.Moment | Date | undefined;
  onClick: (date: moment.Moment) => void;
  children: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

interface NextMonthButtonProps {
  date: moment.Moment;
  disableAfter: moment.Moment | Date | undefined;
  onClick: (date: moment.Moment) => void;
  children: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

class PrevMonthButton extends React.PureComponent<PrevMonthButtonProps, {}> {
  render() {
    const disabled: boolean = this.props.disableBefore !== undefined
      && this.props.date.isSameOrBefore(this.props.disableBefore, 'month');
    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {};
    
    if (!disabled) {
      buttonProps.onClick = () => this.props.onClick(this.props.date.clone().subtract(1, 'month'));
    } else {
      buttonProps.disabled = true;
    }
    
    return React.cloneElement(this.props.children, buttonProps);
  }
}

class NextMonthButton extends React.PureComponent<NextMonthButtonProps, {}> {
  render() {
    const disabled: boolean = this.props.disableAfter !== undefined
      && this.props.date.isSameOrAfter(this.props.disableAfter, 'month');
    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {};
    
    if (!disabled) {
      buttonProps.onClick = () => this.props.onClick(this.props.date.clone().add(1, 'month'));
    } else {
      buttonProps.disabled = true;
    }
    
    return React.cloneElement(this.props.children, buttonProps);
  }
}