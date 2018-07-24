import { DateTime } from 'luxon';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import DateSelector from './DateSelector';
import DateTimeInput from './DateTimeInput';
import './DateTimeSelector.scss';

export interface Props {
  date: DateTime;
  onChange: (date: DateTime) => void;
  
  disableBefore?: DateTime;
  disableAfter?: DateTime;
}

interface InternalProps extends ContextState {
}

interface State {
  date: DateTime;
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'DateTimeSelector';
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      date: props.date,
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
    if (!prevState.date.hasSame(nextProps.date, 'seconds')) {
      return {
        date: nextProps.date,
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
  
  onDateTimeChange = (newDate: DateTime) => {
    this.setState({
      date: newDate,
    });
    
    this.props.onChange(newDate);
  };
  
  onDateChange = (newDate: DateTime) => {
    const {hour, minute, second} = this.state.date;
    const date: DateTime = newDate.set({
      hour,
      minute,
      second,
    });
    
    this.setState({
      date,
    });
    
    this.props.onChange(date);
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;