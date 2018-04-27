import * as moment from 'moment';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import './MonthSelector.scss';

export interface Props {
  date: moment.Moment | Date;
  onChange: (year: number, month: number) => void;
  
  disableBefore?: moment.Moment | Date;
  disableAfter?: moment.Moment | Date;
}

interface InternalProps extends ContextState {
}

interface State {
  date: moment.Moment,
  source: Map<number, number[]>, // of <year, months>
  
  prevDisableBefore: moment.Moment | Date | undefined,
  prevDisableAfter: moment.Moment | Date | undefined,
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'MonthSelector';
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      date: moment(props.date),
      source: parseSource(props),
      prevDisableBefore: props.disableBefore,
      prevDisableAfter: props.disableAfter,
    };
  }
  
  
  render() {
    const year: number = this.state.date.year();
    const month: number = this.state.date.month() + 1;
    const years: number[] = Array.from<number>(this.state.source.keys());
    const months: number[] = this.state.source.get(year) as number[];
    
    return (
      <div className={'MonthSelector ' + this.props.config.monthSelectorClassName}>
        <select className="select"
                value={year}
                onChange={this.onYearChange}>
          {
            years.map(year => (
              <option key={year} value={year}>
                {this.props.config.monthSelectorYearLabelFunction(year)}
              </option>
            ))
          }
        </select>
        
        <select className="select"
                value={month}
                onChange={this.onMonthChange}>
          {
            months.map(month => (
              <option key={month} value={month}>
                {this.props.config.monthSelectorMonthLabelFunction(month)}
              </option>
            ))
          }
        </select>
      </div>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps, prevState: State): Partial<State> {
    const state: Partial<State> = {};
    
    if (prevState.prevDisableBefore !== nextProps.disableBefore
      || prevState.prevDisableAfter !== nextProps.disableAfter) {
      state.prevDisableBefore = nextProps.disableBefore;
      state.prevDisableAfter = nextProps.disableAfter;
      state.source = parseSource(nextProps);
    }
    
    if (!prevState.date.isSame(nextProps.date, 'month')) {
      state.date = moment(nextProps.date);
    }
    
    return state;
  }
  
  shouldComponentUpdate(nextProps: Props & InternalProps, nextState: State) {
    return this.state.date !== nextState.date
      || this.state.source !== nextState.source;
  }
  
  onYearChange = (event: React.ChangeEvent<{value: string}>) => {
    const year: number = Number(event.target.value);
    const months: number[] = this.state.source.get(year) as number[];
    const currentMonth: number = this.state.date.month() + 1;
    const month: number = months.indexOf(currentMonth) > -1
      ? currentMonth
      : months[months.length - 1];
    
    this.props.onChange(year, month);
  };
  
  onMonthChange = (event: React.ChangeEvent<{value: string}>) => {
    const year: number = this.state.date.year();
    const month: number = Number(event.target.value);
    
    this.props.onChange(year, month);
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;

function parseSource({disableBefore, disableAfter}: Props): Map<number, number[]> {
  let from: moment.Moment, to: moment.Moment;
  
  if (disableBefore && disableAfter) {
    from = moment(disableBefore);
    to = moment(disableAfter);
  } else if (disableBefore) {
    from = moment(disableBefore);
    to = moment().add(10, 'year').endOf('year');
  } else if (disableAfter) {
    from = moment().subtract(10, 'year').startOf('year');
    to = moment(disableAfter);
  } else {
    from = moment().subtract(10, 'year').startOf('year');
    to = moment().add(10, 'year').endOf('year');
  }
  
  const source: Map<number, number[]> = new Map<number, number[]>();
  const itr: moment.Moment = from.clone();
  
  while (itr.isSameOrBefore(to, 'month')) {
    const year: number = itr.year();
    const month: number = itr.month() + 1;
    
    if (!source.has(year)) {
      source.set(year, []);
    }
    
    (source.get(year) as number[]).push(month);
    
    itr.add(1, 'month');
  }
  
  return source;
}