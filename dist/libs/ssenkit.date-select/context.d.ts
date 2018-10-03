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
declare const Consumer: React.ComponentType<React.ConsumerProps<ContextState>>;
declare class Provider extends React.PureComponent<Props, {}> {
    static displayName: string;
    render(): JSX.Element;
}
declare function withConsumer<Props>(Component: React.ComponentClass<Props>): React.ComponentType<ContextState & Props>;
export { Provider, Consumer, withConsumer, ContextState, Config, Props, };
