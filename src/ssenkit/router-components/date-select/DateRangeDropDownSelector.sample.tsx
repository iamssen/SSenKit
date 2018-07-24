import { DateTime } from 'luxon';
import * as React from 'react';
import { DateRange, DateRangeDropDownSelector } from 'ssenkit.date-select';

interface State {
  dateRange: DateRange;
  disableBefore?: DateTime;
  disableAfter?: DateTime;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    dateRange: {
      from: DateTime.local().minus({days: 3}).toJSDate(),
    },
    disableBefore: DateTime.local().minus({years: 4}),
    disableAfter: DateTime.local().plus({years: 1}),
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