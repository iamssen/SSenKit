import * as moment from 'moment';
import * as React from 'react';
import { DateTimeInput } from 'ssenkit.date-select';

interface State {
  datetime: Date;
  disableBefore: moment.Moment | Date;
  disableAfter: moment.Moment | Date;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    datetime: new Date,
    disableBefore: moment().subtract(10, 'days'),
    disableAfter: moment().add(10, 'days'),
  };
  
  render() {
    return (
      <div>
        <DateTimeInput date={this.state.datetime}
                       disableBefore={this.state.disableBefore}
                       disableAfter={this.state.disableAfter}
                       onChange={this.onChange}/>
        <span>Selected: {moment(this.state.datetime).format('YYYY-MM-DD HH:mm:ss')}</span>
        <span>{' '}</span>
        <span>Disable: {moment(this.state.disableBefore).format('YYYY-MM-DD HH:mm:ss')} / {moment(this.state.disableAfter).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    );
  }
  
  onChange = (datetime: Date) => {
    this.setState({
      datetime
    });
  };
}