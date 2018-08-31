import * as moment from 'moment';
import * as React from 'react';

interface Config {
  disableBefore: moment.Moment | Date;
  disableAfter: moment.Moment | Date;
  timeInputClassName: string;
  dateInputClassName: string;
  dateTimeInputClassName: string;
  monthSelectorClassName: string;
  monthSelectorYearLabelFunction: (year: number) => string;
  monthSelectorMonthLabelFunction: (month: number) => string;
  dateSelectorClassName: string;
  dateSelectorPrevMonthButton: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  dateSelectorNextMonthButton: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  dateSelectorDayLabelFunction: (day: 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat') => string;
  dateTimeSelectorClassName: string;
  fromToDateTimeSelectorClassName: string;
  fromToDateTimeDropDownSelectorClassName: string;
  fromToDateTimeDropDownSelectorCancelButton: React.ReactElement<React.HTMLAttributes<HTMLButtonElement>>;
  fromToDateTimeDropDownSelectorApplyButton: React.ReactElement<React.HTMLAttributes<HTMLButtonElement>>;
  dateRangeSelectorClassName: string;
  dateRangeSelectorDateTabLabel: React.ReactNode;
  dateRangeSelectorListTabLabel: React.ReactNode;
  dateRangeSelectorCancleButton: React.ReactElement<React.HTMLAttributes<HTMLButtonElement>>;
  dateRangeSelectorApplyButton: React.ReactElement<React.HTMLAttributes<HTMLButtonElement>>;
  dateRangeDropDownSelectorClassName: string;
}

interface Props {
  config?: Partial<Config>;
}

interface ContextState {
  config: Config;
}

const defaultConfig: Config = {
  disableBefore: moment().subtract(10, 'years').startOf('year'),
  disableAfter: moment().add(10, 'years').endOf('year'),
  dateInputClassName: '',
  timeInputClassName: '',
  dateTimeInputClassName: '',
  monthSelectorClassName: '',
  monthSelectorYearLabelFunction: (year: number) => year.toString(),
  monthSelectorMonthLabelFunction: (month: number) => month.toString(),
  dateSelectorClassName: '',
  dateSelectorPrevMonthButton: <button>←</button>,
  dateSelectorNextMonthButton: <button>→</button>,
  dateSelectorDayLabelFunction: (day: 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat') => {
    switch (day) {
      case 'sun':
        return 'S';
      case 'mon':
        return 'M';
      case 'tue':
        return 'T';
      case 'wed':
        return 'W';
      case 'thu':
        return 'T';
      case 'fri':
        return 'F';
      case 'sat':
        return 'S';
      default:
        throw new Error('Unknown day');
    }
  },
  dateTimeSelectorClassName: '',
  fromToDateTimeSelectorClassName: '',
  fromToDateTimeDropDownSelectorClassName: '',
  fromToDateTimeDropDownSelectorCancelButton: <button>Cancel</button>,
  fromToDateTimeDropDownSelectorApplyButton: <button>Apply</button>,
  dateRangeSelectorClassName: '',
  dateRangeSelectorDateTabLabel: 'By Date',
  dateRangeSelectorListTabLabel: 'By List',
  dateRangeSelectorCancleButton: <button>Cancel</button>,
  dateRangeSelectorApplyButton: <button>Apply</button>,
  dateRangeDropDownSelectorClassName: '',
};

const {Provider: ReactProvider, Consumer} = React.createContext<ContextState>({config: defaultConfig});

class Provider extends React.PureComponent<Props, {}> {
  static displayName: string = 'Provider';
  
  render() {
    return (
      <Consumer>
        {
          ({config}) => {
            if (this.props.config) {
              config = {
                ...config,
                ...this.props.config,
              };
            }
            
            return (
              <ReactProvider value={{config}}>
                {this.props.children}
              </ReactProvider>
            );
          }
        }
      </Consumer>
    );
  }
}

function withConsumer<Props>(Component: React.ComponentClass<Props>): React.ComponentType<ContextState & Props> {
  return React.forwardRef((props, ref) => (
    <Consumer>
      {
        state => <Component {...state} {...props} ref={ref}/>
      }
    </Consumer>
  ));
}

export {
  Provider,
  Consumer,
  withConsumer,
  ContextState,
  Config,
  Props,
};