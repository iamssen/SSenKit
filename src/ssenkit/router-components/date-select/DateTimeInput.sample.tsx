import { DateTime } from 'luxon';
import * as React from 'react';
import { DateTimeInput } from 'ssenkit.date-select';

interface State {
  datetime: DateTime;
  disableBefore: DateTime;
  disableAfter: DateTime;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    datetime: DateTime.local(),
    disableBefore: DateTime.local().minus({days: 10}),
    disableAfter: DateTime.local().plus({days: 10}),
  };
  
  render() {
    return (
      <div>
        <DateTimeInput date={this.state.datetime}
                       disableBefore={this.state.disableBefore}
                       disableAfter={this.state.disableAfter}
                       onChange={this.onChange}/>
        <span>Selected: {this.state.datetime.toFormat('yyyy-LL-dd HH:mm:ss')}</span>
        <span>{' '}</span>
        <span>Disable: {this.state.disableBefore.toFormat('yyyy-LL-dd HH:mm:ss')} / {this.state.disableAfter.toFormat('yyyy-LL-dd HH:mm:ss')}</span>
      </div>
    );
  }
  
  onChange = (datetime: DateTime) => {
    this.setState({datetime});
  };
}