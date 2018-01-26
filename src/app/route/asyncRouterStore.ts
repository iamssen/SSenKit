import { AsyncRouterStore } from 'ssenkit.router-store';

export default new AsyncRouterStore([
  {
    path: '/',
    exact: true,
    component: () => import('app/router-components/main'),
  },
  {
    path: '/ssenkit/autocomplete-text-input',
    component: () => import('ssenkit/router-components/autocomplete-text-input'),
  },
  {
    path: '/ssenkit/date-select',
    component: () => import('ssenkit/router-components/date-select'),
  },
  {
    path: '/ssenkit/dropdown-anchor',
    component: () => import('ssenkit/router-components/dropdown-anchor'),
  },
  {
    path: '/ssenkit/modal',
    component: () => import('ssenkit/router-components/modal'),
  },
  {
    path: '/ssenkit/restricted-text-input',
    component: () => import('ssenkit/router-components/restricted-text-input'),
  },
]);