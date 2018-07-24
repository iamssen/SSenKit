import { DateTime } from 'luxon';
import * as React from 'react';
import { MonthSelector } from 'ssenkit.date-select';

interface State {
  date: DateTime;
  disableBefore: DateTime;
  disableAfter: DateTime;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    date: DateTime.local(),
    disableBefore: DateTime.local().minus({years: 10}),
    disableAfter: DateTime.local().plus({years: 5}),
  };
  
  render() {
    return (
      <div>
        <MonthSelector date={this.state.date}
                       disableBefore={this.state.disableBefore}
                       disableAfter={this.state.disableAfter}
                       onChange={this.onChange}/>
        <span>Selected: {this.state.date.toFormat('yyyy-LL')}</span>
      </div>
    );
  }
  
  onChange = (year: number, month: number) => {
    this.setState({
      date: DateTime.local(year, month),
    });
  };
}