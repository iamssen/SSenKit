import * as deepAssign from 'deep-assign';
import * as React from 'react';

interface Config {
  timeInputClassName: string;
  dateInputClassName: string;
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
  dateInputClassName: '',
  timeInputClassName: '',
  monthSelectorClassName: '',
  monthSelectorYearLabelFunction: (year: number) => year.toString() + '년',
  monthSelectorMonthLabelFunction: (month: number) => month.toString() + '월',
  dateSelectorClassName: '',
  dateSelectorPrevMonthButton: <button>←</button>,
  dateSelectorNextMonthButton: <button>→</button>,
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
  dateTimeSelectorClassName: '',
  fromToDateTimeSelectorClassName: '',
  fromToDateTimeDropDownSelectorClassName: '',
  fromToDateTimeDropDownSelectorCancelButton: <button>취소</button>,
  fromToDateTimeDropDownSelectorApplyButton: <button>적용</button>,
  dateRangeSelectorClassName: '',
  dateRangeSelectorDateTabLabel: '기간 입력',
  dateRangeSelectorListTabLabel: '기간 리스트',
  dateRangeSelectorCancleButton: <button>취소</button>,
  dateRangeSelectorApplyButton: <button>적용</button>,
  dateRangeDropDownSelectorClassName: '',
};

const {Provider: ReactProvider, Consumer} = React.createContext<ContextState>({config: defaultConfig});

class Provider extends React.PureComponent<Props, {}> {
  static displayName: string = 'Provider';
  
  render() {
    return (
      <Consumer>
        {
          ({config}) => (
            <ReactProvider value={{
              config: this.props.config
                ? deepAssign(config, this.props.config)
                : config,
            }}>
              {this.props.children}
            </ReactProvider>
          )
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