import { RouteStore, SyncRouteStore } from 'react-router-store';

export const syncRouteStore: RouteStore = new SyncRouteStore([
  {
    path: '/',
    exact: true,
    component: require('../route-components/main').default,
  },
  {
    path: '/react-devdoc',
    component: require('module-samples/react-devdoc').default,
  },
]);