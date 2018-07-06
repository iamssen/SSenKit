import { SyncRouterStore } from 'ssenkit.router-store';

export default new SyncRouterStore([
  {
    path: '/',
    exact: true,
    component: require('seed/router-components/main').default,
  },
  {
    path: '/ssenkit/autocomplete-text-input',
    component: require('ssenkit/router-components/autocomplete-text-input').default,
  },
  {
    path: '/ssenkit/date-select',
    component: require('ssenkit/router-components/date-select').default,
  },
  {
    path: '/ssenkit/dropdown-anchor',
    component: require('ssenkit/router-components/dropdown-anchor').default,
  },
  {
    path: '/ssenkit/modal',
    component: require('ssenkit/router-components/modal').default,
  },
  {
    path: '/ssenkit/restricted-text-input',
    component: require('ssenkit/router-components/restricted-text-input').default,
  },
  {
    path: '/ssenkit/recontext',
    component: require('ssenkit/router-components/recontext').default,
  },
]);