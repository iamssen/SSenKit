import { DateTime } from 'luxon';
import * as React from 'react';
import { ContextState, withConsumer } from '../context';
import { DateRange, FromTo, isFromTo } from '../types';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DateRangeSelector.scss';
import DefaultDateList from './DefaultDateList';
import FromToDateTimeSelector from './FromToDateTimeSelector';

export interface Props {
  dateRange: DateRange;
  onChange: (progressiveDateRange: DateRange) => void;
  onCancel: () => void;
  onComplete: (dateRange: DateRange) => void;
  
  disableBefore?: DateTime;
  disableAfter?: DateTime;
  
  children?: React.ReactElement<DatePresetSelectorProps>;
}

interface InternalProps extends ContextState {
}

interface State {
  tabIndex: number;
  prevDateRange: DateRange;
  progressiveDateRange: DateRange;
}

function getTabIndex(dateRange: DateRange): number {
  return isFromTo(dateRange) && !dateRange.description ? 1 : 0;
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'DateRangeSelector';
  
  static defaultProps: Partial<Props> = {
    children: <DefaultDateList/>,
  };
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      tabIndex: getTabIndex(props.dateRange),
      prevDateRange: props.dateRange,
      progressiveDateRange: props.dateRange,
    };
  }
  
  render() {
    return (
      <div className={'DateRangeSelector ' + this.props.config.dateRangeSelectorClassName}>
        <div role="tab">
          {
            this.state.tabIndex === 0
              ? (
                <ul>
                  <li aria-selected="false" onClick={() => this.onTabChange(1)}>
                    {this.props.config.dateRangeSelectorDateTabLabel}
                  </li>
                  <li aria-selected="true">
                    {this.props.config.dateRangeSelectorListTabLabel}
                  </li>
                </ul>
              )
              : (
                <ul>
                  <li aria-selected="true">
                    {this.props.config.dateRangeSelectorDateTabLabel}
                  </li>
                  <li aria-selected="false" onClick={() => this.onTabChange(0)}>
                    {this.props.config.dateRangeSelectorListTabLabel}
                  </li>
                </ul>
              )
          }
        </div>
        {
          this.state.tabIndex === 0
            ? React.cloneElement(this.props.children as JSX.Element, {
              dateRange: this.state.progressiveDateRange,
              onSelect: this.onDateComplete,
            })
            : (
              <div role="selector">
                <FromToDateTimeSelector fromTo={this.state.progressiveDateRange as FromTo}
                                        disableBefore={this.props.disableBefore}
                                        disableAfter={this.props.disableAfter || DateTime.local().endOf('day')}
                                        onChange={this.onDateChange}/>
                <div role="buttons">
                  {
                    React.cloneElement(this.props.config.dateRangeSelectorCancleButton, {
                      onClick: this.onDateCancel,
                    })
                  }
                  {
                    React.cloneElement(this.props.config.dateRangeSelectorApplyButton, {
                      onClick: () => this.onDateComplete(this.state.progressiveDateRange),
                    })
                  }
                </div>
              </div>
            )
        }
      </div>
    );
  }
  
  static getDerivedStateFromProps(nextProps: Props & InternalProps, prevState: State): Partial<State> | null {
    if (prevState.prevDateRange !== nextProps.dateRange) {
      return {
        prevDateRange: nextProps.dateRange,
        progressiveDateRange: nextProps.dateRange,
        tabIndex: getTabIndex(nextProps.dateRange),
      };
    }
    
    return null;
  }
  
  shouldComponentUpdate(nextProps: Props & InternalProps, nextState: State) {
    return this.state.progressiveDateRange !== nextState.progressiveDateRange
      || this.state.tabIndex !== nextState.tabIndex;
  }
  
  onTabChange = (tabIndex: number) => {
    if (tabIndex === 1) {
      this.onDateChange({
        from: DateTime.local().startOf('day').toJSDate(),
        to: new Date,
      });
    }
    
    this.setState({
      tabIndex,
    });
  };
  
  onDateCancel = () => {
    this.props.onCancel();
    this.setState({
      progressiveDateRange: this.props.dateRange,
    });
  };
  
  onDateComplete = (dateRange: DateRange) => {
    this.props.onComplete(dateRange);
  };
  
  onDateChange = (dateRange: DateRange) => {
    this.props.onChange(dateRange);
    this.setState({
      progressiveDateRange: dateRange,
    });
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;