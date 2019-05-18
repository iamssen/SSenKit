import loadable from '@loadable/component';
import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

const routes: ReactElement = (
  <Switch>
    <Route path="/" exact
           component={loadable(() => import('../pages/home'))}/>
    <Route path="/packages/react-devdoc"
           component={loadable(() => import('../../packages/react-devdoc'))}/>
    <Route path="/packages/react-virtual-scroller"
           component={loadable(() => import('../../packages/react-virtual-scroller'))}/>
    <Route path="/packages/use-locale"
           component={loadable(() => import('../../packages/use-locale'))}/>
    <Route path="/packages/use-react-intl"
           component={loadable(() => import('../../packages/use-react-intl'))}/>
    <Route path="/packages/use-restricted-input"
           component={loadable(() => import('../../packages/use-restricted-input'))}/>
    <Route path="/packages/use-timezone"
           component={loadable(() => import('../../packages/use-timezone'))}/>
    <Route path="/research/immer"
           component={loadable(() => import('../../research/immer'))}/>
    <Route path="/research/numeral"
           component={loadable(() => import('../../research/numeral'))}/>
    <Route path="/research/immutable"
           component={loadable(() => import('../../research/immutable'))}/>
  </Switch>
);

export function RouterContents() {
  return routes;
}