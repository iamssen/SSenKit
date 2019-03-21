Installation
===============================

```
npm install react-router-store
```

`react-router-store` makes the `react-router` processing simpler for server side rendering.

Usage
===============================

Create async and sync route stores
----------------------------------------

```typescript
// asyncRouteStore.ts
import { RouteStore, AsyncRouteStore } from 'react-router-store';

export const asyncRouteStore: RouteStore = new AsyncRouteStore([
  {
    path: '/',
    exact: true,
    component: () => import('./pages/main'),
  },
  {
    path: '/sample',
    component: () => import('./pages/sample'),
  },
]);
```

```typescript
// syncRouteStore.ts
import { RouteStore, SyncRouteStore } from 'react-router-store';

import main from './pages/main';
import sample from './pages/sample'; 

export const syncRouteStore: RouteStore = new SyncRouteStore([
  {
      path: '/',
      exact: true,
      component: main,
    },
    {
      path: '/sample',
      component: sample,
    },
]);
```

Add `<Route/>`
----------------------------------------

```typescript jsx
// main.tsx
import React from 'react';
import { RouteStore } from 'react-router-store';
import { BrowserRouter, Route, Link } from 'react-router-dom';

interface MainProps {
  routeStore: RouteStore;
}

export function Main({ routeStore }: MainProps) {
  return (
    <div id="layout">
      <ul id="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sample">Home</Link>
        </li>
      </ul>
      
      <div id="content">
        {/*<Route exact path="/" component={}/>*/}
        {/*<Route path="/sample" component={}/>*/}
        {routeStore.getRoute('/')}
        {routeStore.getRoute('/sample')}
      </div>
    </div>
  )
}
```

Creates entry files
----------------------------------------

Creates entry files for client and server.

```typescript jsx
// client.tsx
import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { asyncRouteStore } from './asyncRouteStore';
import { Main } from './main';

function App() {
  return (
    <BrowserRouter>
      <Main routeStore={asyncRouteStore}/>
    </BrowserRouter>
  )
}

if (window.__INITIAL_STATE__) {
  asyncRouteStore.preload(location.pathname).then(() => {
    hydrate(<App/>, document.querySelector('#app'));
  });
} else {
  render(<App/>, document.querySelector('#app'));
}
```

For client, preloads the route component before running the app.

```typescript jsx
// server.tsx
import React from 'react';
import { StaticRouter } from 'react-router';
import express, { Express, Request, Response } from 'express';
import { renderToString } from 'react-dom/server';

import { syncRouteStore } from './syncRouteStore';
import { Main } from './main';

function renderHtml(url: string, initialState: object): string {
  const htmlText: string = renderToString(
    <StaticRouter location={url} context={{}}>
      <Main routeStore={syncRouteStore}/>
    </StaticRouter>
  );
  
  return `
    <html>
      <head>
        <meta charset=UTF-8>
        <script>
          window.__INITIAL_STATE__ = ${initialState.replace(/</g, '\\u003c')};
        </script>
      </head>
      <body>
        <div id="app">${htmlText}</div>
      </body>
    </html>
  `;
}

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send(renderHtml(req.url, {}));
});

app.get('/sample', (req: Request, res: Response) => {
  res.send(renderHtml(req.url, {}));
});

app.listen(8080);
```

Add a test
----------------------------------------

Add a test to make sure both stores are set to the same options.

```typescript
import { compareRouteOptions } from 'react-router-store';
import { asyncRouteStore } from './asyncRouteStore';
import { syncRouteStore } from './syncRouteStore';

describe('/route', () => {
  it('Should be matched all route options of stores', () => {
    expect(compareRouteOptions(
      asyncRouteStore.getRouteOptions(),
      syncRouteStore.getRouteOptions(),
    )).toBeTruthy();
  });
});
```

