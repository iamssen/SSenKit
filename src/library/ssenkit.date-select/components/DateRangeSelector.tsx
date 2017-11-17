import * as moment from 'moment';
import * as React from 'react';
import { DateRange, FromTo, isFromTo } from '../types';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DateRangeSelector.scss';
import DefaultDateList from './DefaultDateList';
import FromToDateTimeSelector from './FromToDateTimeSelector';

export interface Props {
  className?: string;
  
  dateRange: DateRange;
  onChange: (progressiveDateRange: DateRange) => void;
  onCancel: () => void;
  onComplete: (dateRange: DateRange) => void;
  
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
  
  children?: React.ReactElement<DatePresetSelectorProps>;
}

export interface State {
  tabIndex?: number;
  dateRange?: DateRange;
}

export default class extends React.Component<Props, State> {
  static defaultProps: object = {
    className: '',
    date: {from: moment().startOf('day').toDate()},
    children: <DefaultDateList/>,
  };
  
  render() {
    let selector: JSX.Element, tab: JSX.Element;
    const {tabIndex, dateRange} = this.state;
    
    if (tabIndex === 0) {
      tab = (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" onClick={() => this.onTabChange(1)}>
              기간 입력
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active">
              기간 리스트
            </a>
          </li>
        </ul>
      );
      
      selector = React.cloneElement(this.props.children as JSX.Element, {
        dateRange: this.state.dateRange,
        onSelect: this.onDateComplete,
      });
    } else {
      tab = (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active">
              기간 입력
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => this.onTabChange(0)}>
              기간 리스트
            </a>
          </li>
        </ul>
      );
      
      selector = (
        <div role="selector">
          <FromToDateTimeSelector fromTo={dateRange as FromTo}
                                  disableBefore={this.props.disableBefore}
                                  disableAfter={this.props.disableAfter || moment().endOf('day').toDate()}
                                  onChange={this.onDateChange}/>
          <div role="buttons">
            <button className="btn outline-1" onClick={this.onDateCancel}>취소</button>
            <button className="btn light-blue" onClick={() => this.onDateComplete(dateRange)}>적용</button>
          </div>
        </div>
      );
    }
    
    return (
      <div className={'DateRangeSelector ' + this.props.className}>
        <div role="tab" className="b-b b-primary nav-active-primary">
          {tab}
        </div>
        {selector}
      </div>
    );
  }
  
  onTabChange = (tabIndex: number) => {
    const state: State = {tabIndex};
    
    if (tabIndex === 1) {
      state.dateRange = {
        from: moment().startOf('day').toDate(),
        to: moment().toDate(),
      };
    }
    
    this.setState(state);
  };
  
  onDateCancel = () => {
    this.props.onCancel();
  };
  
  onDateComplete = (dateRange: DateRange) => {
    this.props.onComplete(dateRange);
  };
  
  onDateChange = (dateRange: DateRange) => {
    this.props.onChange(dateRange);
    this.setState({dateRange});
  };
  
  componentWillMount() {
    this.propsToState({} as Props, this.props);
  }
  
  componentWillReceiveProps(nextProps: Props) {
    this.propsToState(this.props, nextProps);
  }
  
  private propsToState(prevProps: Props, nextProps: Props) {
    if (prevProps.dateRange !== nextProps.dateRange) {
      const prevState: State = this.state || {};
      const state: State = {};
      state.dateRange = nextProps.dateRange;
      
      const nextTabIndex: number = this.getTabIndex(nextProps.dateRange);
      
      if (prevState.tabIndex !== nextTabIndex) {
        state.tabIndex = nextTabIndex;
      }
      
      this.setState(state);
    }
  }
  
  private getTabIndex(dateRange: DateRange): number {
    return isFromTo(dateRange) && !dateRange.description ? 1 : 0;
  }
  
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const prevState: State = this.state;
    return prevState.dateRange !== nextState.dateRange || prevState.tabIndex !== nextState.tabIndex;
  }
}