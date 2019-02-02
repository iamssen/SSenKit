import { AsyncRouteStore, RouteStore } from 'react-router-store';

export const asyncRouteStore: RouteStore = new AsyncRouteStore([
  {
    path: '/',
    exact: true,
    component: () => import('../route-components/main'),
  },
  {
    path: '/module-samples/react-devdoc',
    component: () => import('module-samples/react-devdoc'),
  },
  {
    path: '/research/immer',
    component: () => import('research/immer'),
  },
  {
    path: '/research/immutable',
    component: () => import('research/immutable'),
  },
  {
    path: '/research/numeral',
    component: () => import('research/numeral'),
  },
]);