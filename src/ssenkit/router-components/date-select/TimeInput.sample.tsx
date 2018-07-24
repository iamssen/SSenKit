import { DateTime } from 'luxon';
import * as React from 'react';
import { TimeInput } from 'ssenkit.date-select';

interface State {
  time: string;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    time: DateTime.local().toFormat('HH:mm:ss'),
  };
  
  render() {
    return (
      <div>
        <TimeInput time={this.state.time}
                   onChange={this.onChange}/>
        <span>Selected: {this.state.time}</span>
      </div>
    );
  }
  
  onChange = (time: string) => {
    this.setState({time});
  };
}