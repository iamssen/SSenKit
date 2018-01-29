/// <reference types="react" />
import * as React from 'react';
import { FromTo } from '../types';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';
export declare function dateRangeToString(fromTo: FromTo, format: string): string;
declare class Component extends React.Component<FromToDateTimeDropDownSelectorButtonProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export default Component;
