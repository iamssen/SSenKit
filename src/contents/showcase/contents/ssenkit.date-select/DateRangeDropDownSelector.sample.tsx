import { DateRange, DateRangeDropDownSelector } from 'ssenkit.date-select';
import * as moment from 'moment';
import * as React from 'react';

interface State {
  dateRange: DateRange;
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
}

export default class extends React.Component<{}, State> {
  state: State = {
    dateRange: {
      from: moment().subtract(3, 'days').toDate(),
    },
    disableBefore: moment().subtract(4, 'years'),
    disableAfter: moment().add(1, 'years'),
  };
  
  render() {
    return (
      <div>
        <DateRangeDropDownSelector dateRange={this.state.dateRange}
                                   disableBefore={this.state.disableBefore}
                                   disableAfter={this.state.disableAfter}
                                   onChange={this.onChange}/>
        <span>Selected: {JSON.stringify(this.state.dateRange)}</span>
      </div>
    );
  }
  
  onChange = (dateRange: DateRange) => {
    this.setState({dateRange});
  };
}