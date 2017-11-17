import * as moment from 'moment';
import * as React from 'react';
import isSame from './isSame';
import { ChangeEvent } from 'react';
import './MonthSelector.scss';

export interface Props {
  className?: string,
  
  date: moment.MomentInput,
  onChange: (year: number, month: number) => void,
  
  disableBefore?: moment.MomentInput,
  disableAfter?: moment.MomentInput,
}

export interface State {
  date?: moment.Moment,
  source?: Map<number, number[]>,
}

export default class extends React.Component<Props, State> {
  static defaultProps: object = {
    className: '',
  };
  
  state: State = {
    date: null,
    source: null,
  };
  
  render() {
    const year: number = this.state.date.year();
    const month: number = this.state.date.month() + 1;
    const years: number[] = Array.from<number>(this.state.source.keys());
    const months: number[] = this.state.source.get(year);
    
    return (
      <div className={'MonthSelector ' + this.props.className}>
        <select className="select" value={year} onChange={this.onYearChange}>
          {
            years.map(year => <option key={year} value={year}>{year}년</option>)
          }
        </select>
        
        <select className="select" value={month} onChange={this.onMonthChange}>
          {
            months.map(month => <option key={month} value={month}>{month}월</option>)
          }
        </select>
      </div>
    );
  }
  
  onYearChange = (event: ChangeEvent<{value: string}>) => {
    const year: number = Number(event.target.value);
    const months: number[] = this.state.source.get(year);
    const currentMonth: number = this.state.date.month() + 1;
    const month: number = months.indexOf(currentMonth) > -1
      ? currentMonth
      : months[months.length - 1];
    
    this.props.onChange(year, month);
  };
  
  onMonthChange = (event: ChangeEvent<{value: string}>) => {
    const year: number = this.state.date.year();
    const month: number = Number(event.target.value);
    
    this.props.onChange(year, month);
  };
  
  parseSource(props: Props) {
    let from: moment.Moment, to: moment.Moment;
    
    if (props.disableBefore && props.disableAfter) {
      from = moment(props.disableBefore);
      to = moment(props.disableAfter);
    } else if (props.disableBefore) {
      from = moment(props.disableBefore);
      to = moment().add(10, 'year').endOf('year');
    } else if (props.disableAfter) {
      from = moment().subtract(10, 'year').startOf('year');
      to = moment(props.disableAfter);
    } else {
      from = moment().subtract(10, 'year').startOf('year');
      to = moment().add(10, 'year').endOf('year');
    }
    
    const source: Map<number, number[]> = new Map<number, number[]>();
    const itr: moment.Moment = from.clone();
    
    while (itr.isSameOrBefore(to, 'month')) {
      const year: number = itr.year();
      const month: number = itr.month() + 1;
      
      if (!source.has(year)) source.set(year, []);
      source.get(year).push(month);
      
      itr.add(1, 'month');
    }
    
    this.setState({source});
  }
  
  componentWillMount() {
    this.parseSource(this.props);
    this.setState({date: moment(this.props.date)});
  }
  
  componentWillReceiveProps(nextProps: Props) {
    const prevProps: Props = this.props;
    
    if (!isSame(prevProps.disableBefore, nextProps.disableBefore, 'month')
      || !isSame(prevProps.disableAfter, nextProps.disableAfter, 'month')) {
      this.parseSource(nextProps);
    }
    
    if (!isSame(prevProps.date, nextProps.date, 'month')) {
      this.setState({date: moment(nextProps.date)});
    }
  }
  
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.state.date !== nextState.date || this.state.source !== nextState.source;
  }
}