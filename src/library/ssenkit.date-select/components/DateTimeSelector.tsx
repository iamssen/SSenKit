import * as moment from 'moment';
import * as React from 'react';
import DateInput from './DateInput';
import DateSelector from './DateSelector';
import isSame from './isSame';
import TimeInput from './TimeInput';
import toMoment from './toMoment';
import './DateTimeSelector.scss';

export interface Props {
  className?: string;
  
  date: moment.MomentInput;
  onChange: (date: Date) => void;
  
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
}

export interface State {
  date?: moment.Moment;
  time?: string;
}

export default class extends React.Component<Props, State> {
  static defaultProps: object = {
    className: '',
  };
  
  render() {
    return (
      <div className={'DateTimeSelector ' + this.props.className}>
        <div role="inputs">
          <DateInput date={this.state.date}
                     disableBefore={this.props.disableBefore}
                     disableAfter={this.props.disableAfter}
                     onChange={this.onDateChange}/>
          <TimeInput time={this.state.time}
                     onChange={this.onTimeChange}/>
        </div>
        
        <DateSelector date={this.state.date}
                      disableBefore={this.props.disableBefore}
                      disableAfter={this.props.disableAfter}
                      onChange={this.onDateChange}/>
      </div>
    );
  }
  
  onDateChange = (newDate: Date) => {
    const date: moment.Moment = moment(newDate);
    this.setState({date});
    this.props.onChange(this.mergeDateTime(date, this.state.time));
  };
  
  onTimeChange = (newTime: string) => {
    this.setState({time: newTime});
    this.props.onChange(this.mergeDateTime(this.state.date, newTime));
  };
  
  private mergeDateTime(date: moment.Moment, time: string): Date {
    const [HH, mm, ss] = time.split(':');
    return date.clone()
      .hour(Number(HH))
      .minute(Number(mm))
      .second(Number(ss))
      .toDate();
  }
  
  componentWillMount() {
    this.propsToState({} as Props, this.props);
  }
  
  componentWillReceiveProps(nextProps: Props) {
    this.propsToState(this.props, nextProps);
  }
  
  private propsToState(prevProps: Props, nextProps: Props) {
    const state: State = {};
    let changed: boolean = false;
    
    if (!isSame(prevProps.date, nextProps.date, 'day')) {
      state.date = toMoment(nextProps.date);
      changed = true;
    }
    
    const prevTime: string = prevProps.date ? moment(prevProps.date).format('HH:mm:ss') : null;
    const nextTime: string = moment(nextProps.date).format('HH:mm:ss');
    if (prevTime !== nextTime) {
      state.time = nextTime;
      changed = true;
    }
    
    if (changed) this.setState(state);
  }
  
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>) {
    const prevProps: Props = this.props;
    const prevState: State = this.state;
    return prevState.date !== nextState.date
      || prevState.time !== nextState.time
      || prevProps.disableBefore !== nextProps.disableBefore
      || prevProps.disableAfter !== nextProps.disableAfter;
  }
}