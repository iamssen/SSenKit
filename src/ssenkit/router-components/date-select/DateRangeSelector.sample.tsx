import * as moment from 'moment';
import * as React from 'react';
import { DateRange, DateRangeSelector } from 'ssenkit.date-select';

interface State {
  progressiveDateRange: DateRange | null;
  dateRange: DateRange;
  disableBefore?: moment.Moment | Date;
  disableAfter?: moment.Moment | Date;
}

export default class extends React.PureComponent<{}, State> {
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