# Installation

```
npm install use-timezone
```

# API

```typescript
interface Timezone {
  countryCode: string;
  countryName: string;
  zoneName: string;
  gmtOffset: number;
  timestamp: number;
}
```

- `timezoneList: Timezone[]`
- `getBrowserTimezone: (cookieKey: string = 'timezone') => string`
- `useTimezone: (currentTimezone: string) => { timezone: Timezone, updateTimezone: (timezone: string | Timezone) => void }`

# Basic usage

```typescript jsx
import React from 'react';
import { Timezone, useTimezone, getBrowserTimezone, timezoneList } from 'use-timezone';

export function Component() {
  const {timezone, updateTimezone} = useTimezone(getBrowserTimezone());
  
  return (
    <div>
      <div>
        {JSON.stringify(timezone)}
      </div>
      
      <ul>
        {
          timezoneList.map(optionTimezone => (
            <li key={optionTimezone.zoneName} onClick={() => updateTimezone(optionTimezone)}>
              {optionTimezone.zoneName}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
```

Basic use of `useTimezone()` is simple.

# Wrapping with React 16.3 Context

However, the timezone information should be used globally in the application, it is wrapped using the React 16.3 Context API.

```typescript jsx
import React, { Consumer, Context, ReactNode, useContext, createContext } from 'react';
import { Timezone, useTimezone } from 'use-timezone';

export interface SampleContextProps {
  currentTimezone: string;
  children: ReactNode;
}

export interface SampleContextState {
  timezone: Timezone;
  updateTimezone: (timezone: string | Timezone) => void;
}

// @ts-ignore
const SampleContext: Context<SampleContextState> = createContext<SampleContextState>();

export function SampleContextProvider({ currentTimezone, children }: SampleContextProps) {
  const { timezone, updateTimezone } = useTimezone(currentTimezone);
  
  return (
    <SampleContext.Provider value={{
      timezone,
      updateTimezone,
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
import { getBrowserTimezone } from 'use-timezone';
import { Main } from './main';

export function App() {
  return (
    <SampleContextProvider currentTimezone={getBrowserTimezone()}>
      <Main/>
    </SampleContextProvider>
  )
}
```

And wrap the application main in the provider 

```typescript jsx
import React from 'react';
import { useSampleContextState } from './sample-context';
import { Timezone, useTimezone, getBrowserTimezone, timezoneList } from 'use-timezone';

export function Component() {
  const { timezone, updateTimezone } = useSampleContextState();
  
  return (
    <div>
      <div>
        {JSON.stringify(timezone)}
      </div>
      
      <ul>
        {
          timezoneList.map(optionTimezone => (
            <li key={optionTimezone.zoneName} onClick={() => updateTimezone(optionTimezone)}>
              {optionTimezone.zoneName}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
```

You can access the timezone information from anywhere in the application through the hook

# SSR

Additionally, the timezone information in SSR (Server Side Rendering) can be obtained via a cookie

```typescript jsx
import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req, res) => {
  const timezone: string = req.cookies['timezone'] || 'Asia/Seoul';
  
  // res.send(ssr processed html text)
});

app.listen(8080);
``` 