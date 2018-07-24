import { DateTime } from 'luxon';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import { FromTo } from '../types';
import DateTimeSelector from './DateTimeSelector';
import './FromToDateTimeSelector.scss';

export interface Props {
  fromTo: FromTo;
  onChange: (fromTo: FromTo) => void;
  
  disableBefore?: DateTime;
  disableAfter?: DateTime;
}

interface InternalProps extends ContextState {
}

export interface State {
  from: DateTime;
  to: DateTime;
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'FromToDateTimeSelector';
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      from: DateTime.fromJSDate(props.fromTo.from),
      to: DateTime.fromJSDate(props.fromTo.to),
    };
  }
  
  render() {
    const disableBefore: DateTime = this.props.disableBefore || this.props.config.disableBefore;
    const disableAfter: DateTime = this.props.disableAfter || this.props.config.disableAfter;
    
    const toDisableBefore: DateTime = this.state.from.startOf('day') > disableBefore.startOf('day')
      ? this.state.from
      : disableBefore;
    
    return (
      <div className={'FromToDateTimeSelector ' + this.props.config.fromToDateTimeSelectorClassName}>
        <DateTimeSelector date={this.state.from}
                          disableBefore={disableBefore}
                          disableAfter={disableAfter}
                          onChange={this.changeFrom}/>
        
        <DateTimeSelector date={this.state.to}
                          disableBefore={toDisableBefore}
                          disableAfter={disableAfter}
                          onChange={this.changeTo}/>
      </div>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps, prevState: State): Partial<State> | null {
    if (!prevState.from.hasSame(DateTime.fromJSDate(nextProps.fromTo.from), 'second')
      || !prevState.to.hasSame(DateTime.fromJSDate(nextProps.fromTo.to), 'second')) {
      return {
        from: DateTime.fromJSDate(nextProps.fromTo.from),
        to: DateTime.fromJSDate(nextProps.fromTo.to),
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
  
  changeFrom = (from: DateTime) => {
    if (!this.state.from.hasSame(from, 'second')) {
      if (this.state.to < from) {
        this.setState({
          from,
          to: from,
        });
        
        this.props.onChange({
          from: from.toJSDate(),
          to: from.toJSDate(),
        });
      } else {
        this.setState({
          from,
        });
        
        this.props.onChange({
          from: from.toJSDate(),
          to: this.state.to.toJSDate(),
        });
      }
    }
    
  };
  
  changeTo = (to: DateTime) => {
    if (!this.state.to.hasSame(to, 'second')) {
      this.setState({
        to,
      });
      
      this.props.onChange({
        from: this.state.from.toJSDate(),
        to: to.toJSDate(),
      });
    }
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;