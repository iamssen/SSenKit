import { range } from 'd3-array';
import { DateTime } from 'luxon';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import './DateSelector.scss';
import DayCell, { Props as DayCellProps } from './DayCell';
import MonthSelector from './MonthSelector';

export interface Props {
  date: DateTime;
  onChange: (date: DateTime) => void;
  
  disableBefore?: DateTime;
  disableAfter?: DateTime;
}

interface InternalProps extends ContextState {
}

interface State {
  view: DateTime; // Month on calendar
  date: DateTime; // Selected day
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'DateSelector';
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      view: props.date,
      date: props.date,
    };
  }
  
  render() {
    const {view, date: selectedDay} = this.state;
    const today: DateTime = DateTime.local();
    const startDayOfMonth: DateTime = view.startOf('month');
    const endDayOfMonth: DateTime = view.endOf('month');
    
    let itr: DateTime = startDayOfMonth.startOf('week');
    
    let row: React.ReactElement<DayCellProps>[] = []; // of <DayCell>
    const rows: JSX.Element[] = []; // of <tr>
    
    while (itr.startOf('day') <= endDayOfMonth.endOf('week')) {
      //while (itr.isSameOrBefore(endDayOfMonth.clone().endOf('week'), 'day')) {
      // Create Day Cell
      row.push(
        <DayCell key={itr.toFormat('yyyyLLdd')}
                 date={itr}
                 selectedDay={selectedDay}
                 startDay={startDayOfMonth}
                 endDay={endDayOfMonth}
                 today={today}
                 disableBefore={this.props.disableBefore}
                 disableAfter={this.props.disableAfter}
                 onClick={this.onDayClick}/>,
      );
      
      // Week break
      if (itr.weekday === 6) {
        rows.push((
          <tr key={itr.toFormat('ccccc')}>
            {row}
          </tr>
        ));
        
        row = [];
      }
      
      itr = itr.plus({days: 1});
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
                           disableBefore={this.props.disableBefore || this.props.config.disableBefore}
                           onClick={this.changeView}>
            {this.props.config.dateSelectorPrevMonthButton}
          </PrevMonthButton>
          
          <MonthSelector date={view}
                         disableBefore={this.props.disableBefore || this.props.config.disableBefore}
                         disableAfter={this.props.disableAfter || this.props.config.disableAfter}
                         onChange={this.onMonthChange}/>
          
          <NextMonthButton date={view}
                           disableAfter={this.props.disableAfter || this.props.config.disableAfter}
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
    
    if (!prevState.date.hasSame(nextProps.date, 'day')) {
      state.view = nextProps.date;
      state.date = nextProps.date;
    }
    
    return state;
  }
  
  shouldComponentUpdate(nextProps: Readonly<Props & InternalProps>, nextState: Readonly<State>) {
    return this.state.view !== nextState.view
      || this.state.date !== nextState.date
      || this.props.disableBefore !== nextProps.disableBefore
      || this.props.disableAfter !== nextProps.disableAfter
      || this.props.config !== nextProps.config;
  }
  
  changeView = (newMonth: DateTime) => {
    this.setState({
      view: newMonth,
    });
  };
  
  onMonthChange = (year: number, month: number) => {
    this.setState({
      view: this.state.view.set({year, month}),
    });
  };
  
  onDayClick = (newDate: DateTime) => {
    this.props.onChange(newDate);
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;

interface PrevMonthButtonProps {
  date: DateTime;
  disableBefore: DateTime;
  onClick: (date: DateTime) => void;
  children: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

interface NextMonthButtonProps {
  date: DateTime;
  disableAfter: DateTime;
  onClick: (date: DateTime) => void;
  children: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

class PrevMonthButton extends React.PureComponent<PrevMonthButtonProps, {}> {
  render() {
    const disabled: boolean = this.props.disableBefore !== undefined
      && this.props.date.startOf('month') <= this.props.disableBefore.startOf('month');
    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {};
    
    if (!disabled) {
      buttonProps.onClick = () => this.props.onClick(this.props.date.minus({months: 1}));
    } else {
      buttonProps.disabled = true;
    }
    
    return React.cloneElement(this.props.children, buttonProps);
  }
}

class NextMonthButton extends React.PureComponent<NextMonthButtonProps, {}> {
  render() {
    const disabled: boolean = this.props.disableAfter !== undefined
      && this.props.date.startOf('month') >= this.props.disableAfter.startOf('month');
    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {};
    
    if (!disabled) {
      buttonProps.onClick = () => this.props.onClick(this.props.date.plus({months: 1}));
    } else {
      buttonProps.disabled = true;
    }
    
    return React.cloneElement(this.props.children, buttonProps);
  }
}