import { RouteStore, SyncRouteStore } from 'react-router-store';

export const syncRouteStore: RouteStore = new SyncRouteStore([
  {
    path: '/',
    exact: true,
    component: require('../route-components/main').default,
  },
  {
    path: '/modules/react-devdoc',
    component: require('modules/react-devdoc').default,
  },
  {
    path: '/modules/react-router-store',
    component: require('modules/react-router-store').default,
  },
  {
    path: '/modules/use-locale',
    component: require('modules/use-locale').default,
  },
  {
    path: '/modules/use-react-intl',
    component: require('modules/use-react-intl').default,
  },
  {
    path: '/modules/use-timezone',
    component: require('modules/use-timezone').default,
  },
  {
    path: '/research/immer',
    component: require('research/immer').default,
  },
  {
    path: '/research/immutable',
    component: require('research/immutable').default,
  },
  {
    path: '/research/numeral',
    component: require('research/numeral').default,
  },
]);