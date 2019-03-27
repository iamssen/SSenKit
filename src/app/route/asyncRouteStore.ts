import { AsyncRouteStore, RouteStore } from 'react-router-store';

export const asyncRouteStore: RouteStore = new AsyncRouteStore([
  {
    path: '/',
    exact: true,
    component: () => import('../route-components/main'),
  },
  {
    path: '/modules/react-devdoc',
    component: () => import('modules/react-devdoc'),
  },
  {
    path: '/modules/react-router-store',
    component: () => import('modules/react-router-store'),
  },
  {
    path: '/modules/use-locale',
    component: () => import('modules/use-locale'),
  },
  {
    path: '/modules/use-react-intl',
    component: () => import('modules/use-react-intl'),
  },
  {
    path: '/modules/use-timezone',
    component: () => import('modules/use-timezone'),
  },
  {
    path: '/modules/use-restricted-input',
    component: () => import('modules/use-restricted-input'),
  },
  {
    path: '/modules/react-virtual-scroller',
    component: () => import('modules/react-virtual-scroller'),
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