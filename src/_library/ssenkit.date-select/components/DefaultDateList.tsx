import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import * as React from 'react';
//import { translate, InjectedTranslateProps } from 'react-i18next';
import './DefaultDateList.scss';

//1h – 1m 데이터
//6h – 1m 데어터
//12h – 1분 데이터
//1D – 5분 데이터
//1W – 30분 데이터
//1M – 2시간 데이터
//1Y – 5년 데이터

export default ({dateRange, onSelect}: DatePresetSelectorProps) => {
  return (
    <div className="DefaultDateList">
      <ul>
        <li onClick={() => onSelect({latest: '1h'})}>{'date-range-1h'}</li>
        <li onClick={() => onSelect({latest: '6h'})}>{'date-range-6h'}</li>
        <li onClick={() => onSelect({latest: '12h'})}>{'date-range-12h'}</li>
      </ul>
      <ul>
        <li onClick={() => onSelect({latest: '1d'})}>{'date-range-1d'}</li>
        <li onClick={() => onSelect({latest: '1w'})}>{'date-range-1w'}</li>
        <li onClick={() => onSelect({latest: '1m'})}>{'date-range-1m'}</li>
        <li onClick={() => onSelect({latest: '1y'})}>{'date-range-1y'}</li>
      </ul>
    </div>
  );
};