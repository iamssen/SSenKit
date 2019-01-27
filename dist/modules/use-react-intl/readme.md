# Installation

```
npm install use-react-intl
```

Makes `react-intl` to be used as a Function component hook.

This module can be used temporarily until `react-intl` supports the React 16.3 Context API.

After that, it is better to use React 16.8 `useContext()` hook.

# Usage

```typescript jsx
import React from 'react';
import { IntlProvider } from 'use-react-intl';
import { App } from './app';

export function Main(locale: 'en' | 'ko', messages: {[messageId: string]: string}) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <App/>
    </IntlProvider>
  )
}
```

First, you need to add `<IntlProvider/>` to your app.

Its usage is the same as `<IntlProvider/>` in `react-intl`.

```typescript jsx
import React from 'react';
import { InjectedIntl } from 'react-intl';
import { useIntl } from 'use-react-intl';

export function Component() {
  const intl: InjectedIntl = useIntl();
  
  return (
    <span>
      {intl.formatMessage({id: 'some.intl.text'})}
    </span>
  )
}
```

Then, you can use a hook function `useIntl()`.