import { DateTime } from 'luxon';
import * as React from 'react';
import { Config, ConfigProvider, DateSelector } from 'ssenkit.date-select';

const ko: Partial<Config> = {
  monthSelectorYearLabelFunction: year => year.toString() + '년',
  monthSelectorMonthLabelFunction: month => month.toString() + '월',
  dateSelectorDayLabelFunction: (day: 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat') => {
    switch (day) {
      case 'sun':
        return '일';
      case 'mon':
        return '월';
      case 'tue':
        return '화';
      case 'wed':
        return '수';
      case 'thu':
        return '목';
      case 'fri':
        return '금';
      case 'sat':
        return '토';
      default:
        throw new Error('Unknown day');
    }
  },
  dateSelectorPrevMonthButton: <button>이전</button>,
  dateSelectorNextMonthButton: <button>다음</button>,
};

export interface Props {
}

interface InternalProps {
}

interface State {
  date: DateTime;
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'ConfigProvider.sample';
  
  state: State = {
    date: DateTime.local(),
  };
  
  render() {
    return (
      <div>
        <div>
          <DateSelector date={this.state.date}
                        onChange={this.onChange}/>
        </div>
        <ConfigProvider config={ko}>
          <div>
            <DateSelector date={this.state.date}
                          onChange={this.onChange}/>
          </div>
        </ConfigProvider>
        <span>Selected: {this.state.date.toFormat('yyyy-LL-dd HH:mm:ss')}</span>
      </div>
    );
  }
  
  onChange = (date: DateTime) => {
    this.setState({date});
  };
}

export default Component as React.ComponentType<Props>;