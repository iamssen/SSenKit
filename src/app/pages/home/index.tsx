import React from 'react';
import { useIntl } from 'use-react-intl';
import { useAppContextState } from '../../context';

export default function Main() {
  const {locale} = useAppContextState();
  const {formatMessage} = useIntl();
  
  return (
    <div>
      {formatMessage({id: 'home.text'}, {locale})}
    </div>
  );
}