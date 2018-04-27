import * as moment from 'moment';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import DateInput from './DateInput';
import DateSelector from './DateSelector';
import './DateTimeSelector.scss';
import TimeInput from './TimeInput';

export interface Props {
  date: moment.Moment | Date;
  onChange: (date: Date) => void;
  
  disableBefore?: moment.Moment | Date;
  disableAfter?: moment.Moment | Date;
}

interface InternalProps extends ContextState {
}

interface State {
  date: moment.Moment;
  time: string;
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'DateTimeSelector';
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    const date: moment.Moment = moment(props.date);
    
    this.state = {
      date,
      time: date.format('HH:mm:ss'),
    };
  }
  
  render() {
    return (
      <div className={'DateTimeSelector ' + this.props.config.dateTimeSelectorClassName}>
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
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps, prevState: State): Partial<State> | null {
    const date: moment.Moment = moment(nextProps.date);
    const time: string = date.format('HH:mm:ss');
    
    if (!prevState.date.isSame(date, 'day') || prevState.time !== time) {
      return {
        date,
        time,
      };
    }
    
    return null;
  }
  
  shouldComponentUpdate(nextProps: Readonly<Props & InternalProps>, nextState: Readonly<State>) {
    const prevProps: Props = this.props;
    const prevState: State = this.state;
    
    return prevState.date !== nextState.date
      || prevState.time !== nextState.time
      || prevProps.disableBefore !== nextProps.disableBefore
      || prevProps.disableAfter !== nextProps.disableAfter;
  }
  
  onDateChange = (newDate: Date) => {
    const date: moment.Moment = moment(newDate);
    this.setState({
      date,
    });
    this.props.onChange(mergeDateTime(date, this.state.time));
  };
  
  onTimeChange = (newTime: string) => {
    this.setState({
      time: newTime,
    });
    this.props.onChange(mergeDateTime(this.state.date, newTime));
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;

function mergeDateTime(date: moment.Moment, time: string): Date {
  const [HH, mm, ss] = time.split(':');
  return date.clone()
    .hour(Number(HH))
    .minute(Number(mm))
    .second(Number(ss))
    .toDate();
}