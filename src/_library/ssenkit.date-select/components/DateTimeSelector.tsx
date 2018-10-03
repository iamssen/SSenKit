import * as moment from 'moment';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import DateSelector from './DateSelector';
import DateTimeInput from './DateTimeInput';
import './DateTimeSelector.scss';

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
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'DateTimeSelector';
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      date: moment(props.date),
    };
  }
  
  render() {
    return (
      <div className={'DateTimeSelector ' + this.props.config.dateTimeSelectorClassName}>
        <div role="inputs">
          <DateTimeInput date={this.state.date}
                         disableBefore={this.props.disableBefore}
                         disableAfter={this.props.disableAfter}
                         onChange={this.onDateTimeChange}/>
        </div>
        
        <DateSelector date={this.state.date}
                      disableBefore={this.props.disableBefore}
                      disableAfter={this.props.disableAfter}
                      onChange={this.onDateChange}/>
      </div>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps, prevState: State): Partial<State> | null {
    if (!prevState.date.isSame(nextProps.date, 'seconds')) {
      return {
        date: moment(nextProps.date),
      };
    }
    return null;
  }
  
  shouldComponentUpdate(nextProps: Readonly<Props & InternalProps>, nextState: Readonly<State>) {
    return this.state.date !== nextState.date
      || this.props.disableBefore !== nextProps.disableBefore
      || this.props.disableAfter !== nextProps.disableAfter
      || this.props.config !== nextProps.config;
  }
  
  onDateTimeChange = (newDate: Date) => {
    this.setState({
      date: moment(newDate),
    });
    
    this.props.onChange(newDate);
  };
  
  onDateChange = (newDate: Date) => {
    //const {hour, minute, second} = this.state.date;
    
    const date: moment.Moment = moment(newDate)
      .hour(this.state.date.hour())
      .minute(this.state.date.minute())
      .second(this.state.date.second());
    
    //const date: moment.Moment = newDate.set({
    //  hour,
    //  minute,
    //  second,
    //});
    
    this.setState({
      date,
    });
    
    this.props.onChange(date.toDate());
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;