import { DateTime } from 'luxon';
import * as React from 'react';
import { DateRange, DateRangeSelector } from 'ssenkit.date-select';

interface State {
  progressiveDateRange: DateRange | null;
  dateRange: DateRange;
  disableBefore?: DateTime;
  disableAfter?: DateTime;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    progressiveDateRange: null,
    dateRange: {
      from: DateTime.local().minus({days: 3}).toJSDate(),
    },
    disableBefore: DateTime.local().minus({years: 4}),
    disableAfter: DateTime.local().plus({years: 1}),
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
        <div>
          Progressive: {JSON.stringify(this.state.progressiveDateRange)}
        </div>
        <div>
          Selected: {JSON.stringify(this.state.dateRange)}
        </div>
      </div>
    );
  }
  
  onChange = (dateRange: DateRange) => {
    this.setState({
      progressiveDateRange: dateRange,
    });
  };
  
  onComplete = (dateRange: DateRange) => {
    this.setState({
      dateRange,
      progressiveDateRange: null,
    });
  };
  
  onCancel = () => {
    this.setState({
      progressiveDateRange: null,
    });
  };
}