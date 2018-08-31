import { MonthSelector } from 'ssenkit.date-select';
import * as moment from 'moment';
import * as React from 'react';

interface State {
  date: Date;
  disableBefore: moment.Moment | Date;
  disableAfter: moment.Moment | Date;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    date: new Date,
    disableBefore: moment().subtract(10, 'years'),
    disableAfter: moment().add(5, 'years'),
  };
  
  render() {
    return (
      <div>
        <MonthSelector date={this.state.date}
                       disableBefore={this.state.disableBefore}
                       disableAfter={this.state.disableAfter}
                       onChange={this.onChange}/>
        <span>Selected: {moment(this.state.date).format('YYYY-MM')}</span>
      </div>
    );
  }
  
  onChange = (year: number, month: number) => {
    this.setState({
      date: moment(this.state.date).clone()
        .year(year)
        .month(month - 1)
        .toDate(),
    });
  };
}