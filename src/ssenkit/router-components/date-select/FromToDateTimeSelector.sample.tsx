import { DateTime } from 'luxon';
import * as React from 'react';
import { FromTo, FromToDateTimeSelector } from 'ssenkit.date-select';

interface State {
  fromTo: FromTo;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    fromTo: {
      from: DateTime.local().minus({days: 4}).startOf('day').toJSDate(),
      to: new Date(),
    },
  };
  
  render() {
    return (
      <div>
        <FromToDateTimeSelector fromTo={this.state.fromTo} onChange={this.onChange}/>
        <span>Selected: {DateTime.fromJSDate(this.state.fromTo.from).toFormat('yyyy-LL-dd HH:mm:ss')} ~ {DateTime.fromJSDate(this.state.fromTo.to).toFormat('yyyy-LL-dd HH:mm:ss')}</span>
      </div>
    );
  }
  
  onChange = (fromTo: FromTo) => {
    this.setState({fromTo});
  };
}