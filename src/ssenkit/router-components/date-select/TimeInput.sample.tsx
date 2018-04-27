import { TimeInput } from 'ssenkit.date-select';
import * as moment from 'moment';
import * as React from 'react';

interface State {
  time: string;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    time: moment().format('HH:mm:ss'),
  };
  
  render() {
    return (
      <div>
        <TimeInput time={this.state.time} onChange={this.onChange}/>
        <span>Selected: {this.state.time}</span>
      </div>
    );
  }
  
  onChange = (time: string) => {
    this.setState({time});
  };
}