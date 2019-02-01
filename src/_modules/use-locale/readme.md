# Installation

```
npm install use-locale
```

# API

- `getBrowserLocale: <LanguageCode extends string>(cookieKey: string = 'locale') => LanguageCode`
- `useLocale: <LanguageCode extends string>(currentLocale: LanguageCode) => { locale: LanguageCode, updateLocale: (locale: LanguageCode) => void }`

# Basic usage

```typescript jsx
import React from 'react';
import { useLocale } from 'use-locale';

type LanguageCode = 'en-US' | 'ko-KR';
const languageCodes: LanguageCode[] = ['en-US', 'ko-KR'];

export function Component() {
  const {locale, updateLocale} = useTimezone<LanguageCode>(getBrowserTimezone<LanguageCode>());
  
  return (
    <div>
      <div>
        {locale}
      </div>
      
      <ul>
        {
          languageCodes.map(languageCode => (
            <li key={languageCode} onClick={() => updateLocale(languageCode)}>
              {languageCode}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
```

Basic use of `useLocale()` is simple.

# Wrapping with React 16.3 Context

However, the locale information should be used globally in the application, it is wrapped using the React 16.3 Context API.

```typescript
export type LanguageCode = 'en-US' | 'ko-KR';
export const languageCodes: LanguageCode[] = ['en-US', 'ko-KR'];
```

```typescript jsx
import React, { Consumer, Context, ReactNode, useContext, createContext } from 'react';
import { useLocale } from 'use-locale';
import { LanguageCode, languageCodes } from './locale';

export interface SampleContextProps {
  currentLocale: string;
  children: ReactNode;
}

export interface SampleContextState {
  locale: LanguageCode;
  updateLocale: (locale: LanguageCode) => void;
}

// @ts-ignore
const SampleContext: Context<SampleContextState> = createContext<SampleContextState>();

export function SampleContextProvider({ currentLocale, children }: SampleContextProps) {
  const { locale, updateLocale } = useLocale<LanguageCode>(currentLocale);
  
  return (
    <SampleContext.Provider value={{
      locale,
      updateLocale,
    }}>
      {children}
    </SampleContext.Provider>
  );
}

export function useSampleContextState(): SampleContextState {
  return useContext(SampleContext);
}

export const SampleContextConsumer: Consumer<SampleContextState> = SampleContext.Consumer;
```

First, make a context

```typescript jsx
import React from 'react';
import { SampleContextProvider } from './sample-context';
import { LanguageCode } from './locale';
import { getBrowserLocale } from 'use-locale';
import { Main } from './main';

export function App() {
  return (
    <SampleContextProvider currentLocale={getBrowserLocale<LanguageCode>()}>
      <Main/>
    </SampleContextProvider>
  )
}
```

And wrap the application main in the provider 

```typescript jsx
import React from 'react';
import { useSampleContextState } from './sample-context';
import { LanguageCode, languageCodes } from './locale';

export function Component() {
  const { timezone, updateLocale } = useSampleContextState();
  
  return (
    <div>
      <div>
        {JSON.stringify(timezone)}
      </div>
      
      <ul>
        {
          languageCodes.map(languageCode => (
            <li key={languageCode} onClick={() => updateLocale(languageCode)}>
              {languageCode}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
```

You can access the locale information from anywhere in the application through the hook

# SSR

Additionally, the locale information in SSR (Server Side Rendering) can be obtained via a cookie

```typescript jsx
import express, { Express, Request, Response } from 'express';
import { LanguageCode } from './locale';

const app: Express = express();

app.get('/', (req, res) => {
  const locale: LanguageCode = req.cookies['locale'] || 'en-US';
  
  // res.send(ssr processed html text)
});

app.listen(8080);
``` 