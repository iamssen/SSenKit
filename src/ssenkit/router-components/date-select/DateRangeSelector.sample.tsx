import { DateRange, DateRangeSelector } from 'ssenkit.date-select';
import * as moment from 'moment';
import * as React from 'react';

interface State {
  progressiveDateRange: DateRange;
  dateRange: DateRange;
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
}

export default class extends React.Component<{}, State> {
  state: State = {
    progressiveDateRange: null,
    dateRange: {
      from: moment().subtract(3, 'days').toDate(),
    },
    disableBefore: moment().subtract(4, 'years'),
    disableAfter: moment().add(1, 'years'),
  };
  
  render() {
    return (
      <div>
        <DateRangeSelector dateRange={this.state.dateRange}
                           disableBefore={this.state.disableBefore}
                           disableAfter={this.state.disableAfter}
                           onChange={this.onChange}
                           onCancel={this.onCancel}
                           onComplete={this.onComplete}/>
        <span>Progressive: {JSON.stringify(this.state.progressiveDateRange)}</span>
        <span>Selected: {JSON.stringify(this.state.dateRange)}</span>
      </div>
    );
  }
  
  onChange = (dateRange: DateRange) => {
    this.setState({progressiveDateRange: dateRange});
  };
  
  onComplete = (dateRange: DateRange) => {
    this.setState({dateRange, progressiveDateRange: null});
  };
  
  onCancel = () => {
    this.setState({progressiveDateRange: null});
  };
}