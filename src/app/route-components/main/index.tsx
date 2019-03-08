import React from 'react';
import { useIntl } from 'use-react-intl';

export default function Main() {
  const {formatMessage} = useIntl();
  
  return (
    <div>
      {formatMessage({id: 'app.main.text'})}
    </div>
  );
}