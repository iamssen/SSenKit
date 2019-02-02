import { RouteStore, SyncRouteStore } from 'react-router-store';

export const syncRouteStore: RouteStore = new SyncRouteStore([
  {
    path: '/',
    exact: true,
    component: require('../route-components/main').default,
  },
  {
    path: '/module-samples/react-devdoc',
    component: require('module-samples/react-devdoc').default,
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