import { DateSelector } from 'ssenkit.date-select';
import * as React from 'react';
import { DateTime } from 'luxon';

interface State {
  date: DateTime;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    date: DateTime.local(),
  };
  
  render() {
    return (
      <div>
        <DateSelector date={this.state.date}
                      onChange={this.onChange}/>
        <span>Selected: {this.state.date.toFormat('yyyy-LL-dd HH:mm:ss')}</span>
      </div>
    );
  }
  
  onChange = (date: DateTime) => {
    this.setState({date});
  };
}