import { App } from 'app';
import { AppContextProvider } from 'app/context';
import { getBrowserLocale } from 'app/data-types/locale';
import { asyncRouteStore } from 'app/route/asyncRouteStore';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import '../polyfills';

function AppProvider() {
  return (
    <HashRouter>
      <AppContextProvider currentLocale={getBrowserLocale()}>
        <App routeStore={asyncRouteStore}/>
      </AppContextProvider>
    </HashRouter>
  );
}

ReactDOM.render((
  <AppProvider/>
), document.querySelector('#app'));

if (module.hot) {
  Error.stackTraceLimit = Infinity;
  module.hot.accept();
}