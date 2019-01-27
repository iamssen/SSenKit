import { useAppContextState } from 'app/context';
import moment from 'moment-timezone';
import React from 'react';
import { useIntl } from 'use-react-intl';

const dateFormat: string = 'LLLL';

// tslint:disable:no-default-export
export default function () {
  const { locale } = useAppContextState();
  const { formatMessage } = useIntl();
  
  return (
    <div>
      {formatMessage({ id: 'app.sample.text1' })}
      
      <br/>
      <ul>
        <li>
          Local: {moment().locale(locale).format(dateFormat)}
        </li>
        <li>
          Asia/Singapore: {moment.tz('Asia/Singapore').locale(locale).format(dateFormat)}
        </li>
      </ul>
    </div>
  );
}