import * as React from 'react';
import { FromTo } from '../types';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';
export declare function dateRangeToString(fromTo: FromTo | undefined, format: string): string;
declare class Component extends React.PureComponent<FromToDateTimeDropDownSelectorButtonProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export default Component;
