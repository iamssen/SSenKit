import * as moment from 'moment';
import * as React from 'react';
import DropDownAnchor from 'ssenkit.dropdown-anchor';
import { ContextState, withConsumer } from '../context';
import { DateRange } from '../types';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DateRangeDropDownSelector.scss';
import DateRangeDropDownSelectorButton from './DateRangeDropDownSelectorButton';
import { DateRangeDropDownSelectorButtonProps } from './DateRangeDropDownSelectorButtonProps';
import DateRangeSelector from './DateRangeSelector';

export interface Props {
  dateRange: DateRange;
  onChange: (date: DateRange) => void;
  
  button?: React.ReactElement<DateRangeDropDownSelectorButtonProps>;
  children?: React.ReactElement<DatePresetSelectorProps>;
  
  disableBefore?: moment.Moment | Date;
  disableAfter?: moment.Moment | Date;
  
  useAlternatePosition?: boolean;
}

interface InternalProps extends ContextState {
}

interface State {
  progressiveDateRange: DateRange | null;
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'DateRangeDropDownSelector';
  
  private anchorRef: React.RefObject<DropDownAnchor> = React.createRef();
  
  static defaultProps: Partial<Props> = {
    button: <DateRangeDropDownSelectorButton/>,
    useAlternatePosition: true,
  };
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      progressiveDateRange: null,
    };
  }
  
  render() {
    return (
      <DropDownAnchor ref={this.anchorRef}
                      className={'DateRangeDropDownSelector ' + this.props.config.dateRangeDropDownSelectorClassName}
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
    this.setState({
      progressiveDateRange,
    });
  };
  
  onComplete = (dateRange: DateRange) => {
    this.setState({
      progressiveDateRange: null,
    });
    
    this.props.onChange(dateRange);
    
    if (this.anchorRef.current) {
      this.anchorRef.current.close();
    }
  };
  
  onCancel = () => {
    this.setState({
      progressiveDateRange: null,
    });
    
    if (this.anchorRef.current) {
      this.anchorRef.current.close();
    }
  };
  
  onAnchorClose = () => {
    this.setState({
      progressiveDateRange: null,
    });
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;