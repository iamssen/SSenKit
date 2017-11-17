import { FromTo, FromToDateTimeSelector } from 'ssenkit.date-select';
import * as moment from 'moment';
import * as React from 'react';

interface State {
  fromTo: FromTo;
}

export default class extends React.Component<{}, State> {
  state: State = {
    fromTo: {
      from: moment().subtract(4, 'days').startOf('day').toDate(),
      to: new Date(),
    },
  };
  
  render() {
    return (
      <div>
        <FromToDateTimeSelector fromTo={this.state.fromTo} onChange={this.onChange}/>
        <span>Selected: {moment(this.state.fromTo.from).format('YYYY-MM-DD HH:mm:ss')} ~ {moment(this.state.fromTo.to).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    );
  }
  
  onChange = (fromTo: FromTo) => {
    this.setState({fromTo});
  };
}