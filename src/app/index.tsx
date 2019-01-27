import React, { Fragment } from 'react';
import { RouteStore } from 'react-router-store';
import { LanguageChangeButton } from './components/LanguageChangeButton';
import { RouterContents } from './components/RouterContents';
import { RouterNavigation } from './components/RouterNavigation';

import 'prismjs/themes/prism-okaidia.css';

export interface AppProps {
  routeStore: RouteStore;
}

export function App({ routeStore }: AppProps) {
  return (
    <Fragment>
      <div>
        <LanguageChangeButton/>
      </div>
      <div>
        <RouterNavigation/>
      </div>
      <div>
        <RouterContents routeStore={routeStore}/>
      </div>
    </Fragment>
  );
}