import * as moment from 'moment';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import { FromTo } from '../types';
import DateTimeSelector from './DateTimeSelector';
import './FromToDateTimeSelector.scss';

export interface Props {
  fromTo: FromTo;
  onChange: (fromTo: FromTo) => void;
  
  disableBefore?: moment.Moment | Date;
  disableAfter?: moment.Moment | Date;
}

interface InternalProps extends ContextState {
}

export interface State {
  from: moment.Moment;
  to: moment.Moment;
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'FromToDateTimeSelector';
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      from: moment(props.fromTo.from),
      to: moment(props.fromTo.to),
    };
  }
  
  render() {
    const {from, to} = this.state;
    const {disableBefore, disableAfter} = this.props;
    const toDisableBefore: moment.Moment | Date = !disableBefore || (from && from.isAfter(disableBefore, 'day'))
      ? from.toDate()
      : disableBefore;
    
    return (
      <div className={'FromToDateTimeSelector ' + this.props.config.fromToDateTimeSelectorClassName}>
        <DateTimeSelector date={from.toDate()}
                          disableBefore={disableBefore}
                          disableAfter={disableAfter}
                          onChange={newFrom => this.changeFrom(newFrom)}/>
        
        <DateTimeSelector date={to.toDate()}
                          disableBefore={toDisableBefore}
                          disableAfter={disableAfter}
                          onChange={newTo => this.changeTo(newTo)}/>
      </div>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps, prevState: State): Partial<State> | null {
    if (!prevState.from.isSame(nextProps.fromTo.from, 'second')
      || !prevState.to.isSame(nextProps.fromTo.to, 'second')) {
      return {
        from: moment(nextProps.fromTo.from),
        to: moment(nextProps.fromTo.to),
      };
    }
    
    return null;
  }
  
  shouldComponentUpdate(nextProps: Props & InternalProps, nextState: State) {
    const prevProps: Props = this.props;
    const prevState: State = this.state;
    
    return prevState.from !== nextState.from
      || prevState.to !== nextState.to
      || prevProps.disableBefore !== nextProps.disableBefore
      || prevProps.disableAfter !== nextProps.disableAfter;
  }
  
  private changeFrom(fromDate: Date) {
    if (!this.state.from.isSame(fromDate, 'second')) {
      if (this.state.to.isBefore(fromDate)) {
        this.setState({
          from: moment(fromDate),
          to: moment(fromDate),
        });
        
        this.props.onChange({
          from: fromDate,
          to: fromDate,
        });
      } else {
        this.setState({
          from: moment(fromDate),
        });
        
        this.props.onChange({
          from: fromDate,
          to: this.state.to.toDate(),
        });
      }
    }
    
  }
  
  private changeTo(to: Date) {
    if (!this.state.to.isSame(to, 'second')) {
      this.setState({to: moment(to)});
      this.props.onChange({from: this.state.from.toDate(), to});
    }
  }
}

export default withConsumer(Component) as React.ComponentType<Props>;