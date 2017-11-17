import * as moment from 'moment';
import * as React from 'react';
import { FromTo } from '../types';
import DateTimeSelector from './DateTimeSelector';
import isSame from './isSame';
import './FromToDateTimeSelector.scss';

export interface Props {
  className?: string;
  
  fromTo: FromTo;
  onChange: (fromTo: FromTo) => void;
  
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
}

export interface State {
  from?: moment.Moment,
  to?: moment.Moment,
}

export default class extends React.Component<Props, State> {
  static defaultProps: object = {
    className: '',
  };
  
  render() {
    const {from, to} = this.state;
    const {disableBefore, disableAfter} = this.props;
    const toDisableBefore: moment.MomentInput = (!disableBefore || (from && from.isAfter(disableBefore, 'day'))) ? from.toDate() : disableBefore;
    
    return (
      <div className={'FromToDateTimeSelector ' + this.props.className}>
        <DateTimeSelector date={from.toDate()}
                          disableBefore={disableBefore}
                          disableAfter={disableAfter}
                          onChange={(newFrom) => this.changeFrom(newFrom)}/>
        
        <DateTimeSelector date={to.toDate()}
                          disableBefore={toDisableBefore}
                          disableAfter={disableAfter}
                          onChange={(newTo) => this.changeTo(newTo)}/>
      </div>
    );
  }
  
  private changeFrom(fromDate: Date) {
    if (!isSame(this.state.from, fromDate, 'second')) {
      const from: moment.Moment = moment(fromDate);
      const state: State = {from};
      let toDate: Date;
      
      if (this.state.to.isBefore(from)) {
        state.to = from.clone();
        toDate = state.to.toDate();
      } else {
        toDate = this.state.to.toDate();
      }
      
      this.setState(state);
      this.props.onChange({from: fromDate, to: toDate});
    }
    
  }
  
  private changeTo(to: Date) {
    if (!isSame(this.state.to, to, 'second')) {
      this.setState({to: moment(to)});
      this.props.onChange({from: this.state.from.toDate(), to});
    }
  }
  
  componentWillMount() {
    this.propsToState({} as Props, this.props);
  }
  
  componentWillReceiveProps(nextProps: Props) {
    this.propsToState(this.props, nextProps);
  }
  
  private propsToState(prevProps: Props, nextProps: Props) {
    const prevFromTo: FromTo = prevProps.fromTo || {from: null, to: null};
    const nextFromTo: FromTo = nextProps.fromTo || {from: null, to: null};
    
    const state: State = {};
    let changed: boolean = false;
    
    if (!isSame(prevFromTo.from, nextFromTo.from, 'second')) {
      state.from = moment(nextFromTo.from);
      changed = true;
    }
    
    if (!isSame(prevFromTo.to, nextFromTo.to, 'second')) {
      state.to = moment(nextFromTo.to);
      changed = true;
    }
    
    if (changed) this.setState(state);
  }
  
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const prevProps: Props = this.props;
    const prevState: State = this.state;
    return prevState.from !== nextState.from
      || prevState.to !== nextState.to
      || prevProps.disableBefore !== nextProps.disableBefore
      || prevProps.disableAfter !== nextProps.disableAfter;
  }
}