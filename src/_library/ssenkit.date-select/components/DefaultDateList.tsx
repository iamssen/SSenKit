import * as React from 'react';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DefaultDateList.scss';

//1h – 1m 데이터
//6h – 1m 데어터
//12h – 1분 데이터
//1D – 5분 데이터
//1W – 30분 데이터
//1M – 2시간 데이터
//1Y – 5년 데이터

export default class extends React.PureComponent<DatePresetSelectorProps, {}> {
  render() {
    const {onSelect} = this.props;
    
    return (
      <div className="DefaultDateList">
        <ul>
          <li onClick={() => onSelect && onSelect({latest: '1h'})}>Last 1 hour</li>
          <li onClick={() => onSelect && onSelect({latest: '6h'})}>Last 6 hours</li>
          <li onClick={() => onSelect && onSelect({latest: '12h'})}>Last 12 hours</li>
        </ul>
        <ul>
          <li onClick={() => onSelect && onSelect({latest: '1d'})}>Last 1 day</li>
          <li onClick={() => onSelect && onSelect({latest: '1w'})}>Last 1 week</li>
          <li onClick={() => onSelect && onSelect({latest: '1m'})}>Last 1 month</li>
          <li onClick={() => onSelect && onSelect({latest: '1y'})}>Last 1 year</li>
        </ul>
      </div>
    );
  }
}