import { DateTimeSelector } from 'ssenkit.date-select';
import * as React from 'react';
import * as moment from 'moment';

interface State {
  date: Date;
}

export default class extends React.Component<{}, State> {
  state: State = {
    date: new Date,
  };
  
  render() {
    return (
      <div>
        <DateTimeSelector date={this.state.date} onChange={this.onChange}/>
        <span>Selected: {moment(this.state.date).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    );
  }
  
  onChange = (date: Date) => {
    this.setState({date});
  };
}