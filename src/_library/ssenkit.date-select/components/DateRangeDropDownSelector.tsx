import DropDownAnchor from 'ssenkit.dropdown-anchor';
import * as moment from 'moment';
import * as React from 'react';
import { DateRange } from '../types';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DateRangeDropDownSelector.scss';
import DateRangeDropDownSelectorButton from './DateRangeDropDownSelectorButton';
import { DateRangeDropDownSelectorButtonProps } from './DateRangeDropDownSelectorButtonProps';
import DateRangeSelector from './DateRangeSelector';

export interface Props {
  className?: string;
  dateRange: DateRange;
  onChange: (date: DateRange) => void;
  
  button?: React.ReactElement<DateRangeDropDownSelectorButtonProps>;
  children?: React.ReactElement<DatePresetSelectorProps>;
  
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
  
  useAlternatePosition?: boolean;
}

export interface State {
  progressiveDateRange?: DateRange;
}

export default class extends React.Component<Props, State> {
  private anchor: DropDownAnchor;
  
  static defaultProps: object = {
    className: '',
    button: <DateRangeDropDownSelectorButton/>,
    useAlternatePosition: true,
  };
  
  state: State = {
    progressiveDateRange: null,
  };
  
  render() {
    return (
      <DropDownAnchor ref={r => this.anchor = r}
                      className={'DateRangeDropDownSelector ' + this.props.className}
                      useOutboundClick={true}
                      useAlternatePosition={this.props.useAlternatePosition}
                      button={React.cloneElement(this.props.button as JSX.Element, {
                        dateRange: this.props.dateRange,
                        progressiveDateRange: this.state.progressiveDateRange,
                      })}
                      onClose={this.onAnchorClose}>
        <DateRangeSelector dateRange={this.props.dateRange}
                           disableBefore={this.props.disableBefore}
                           disableAfter={this.props.disableAfter}
                           onChange={this.onChange}
                           onCancel={this.onCancel}
                           onComplete={this.onComplete}>
          {this.props.children}
        </DateRangeSelector>
      </DropDownAnchor>
    );
  }
  
  onChange = (progressiveDateRange: DateRange) => {
    this.setState({progressiveDateRange});
  };
  
  onComplete = (dateRange: DateRange) => {
    this.setState({progressiveDateRange: null});
    this.props.onChange(dateRange);
    this.anchor.close();
  };
  
  onCancel = () => {
    this.setState({progressiveDateRange: null});
    this.anchor.close();
  };
  
  onAnchorClose = () => {
    this.setState({progressiveDateRange: null});
  };
}