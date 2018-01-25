import { MonthSelector } from 'ssenkit.date-select';
import * as moment from 'moment';
import * as React from 'react';

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
        <MonthSelector date={this.state.date} onChange={this.onChange}/>
        <span>Selected: {moment(this.state.date).format('YYYY-MM')}</span>
      </div>
    );
  }
  
  onChange = (year: number, month: number) => {
    this.setState({
      date: moment(this.state.date).clone().year(year).month(month - 1).toDate(),
    });
  };
}