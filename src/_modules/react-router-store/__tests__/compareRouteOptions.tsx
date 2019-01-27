import React, { ComponentType } from 'react';
import { AsyncRouteStore } from '../components/AsyncRouteStore';
import { compareRouteOptions } from '../components/compareRouteOptions';
import { SyncRouteStore } from '../components/SyncRouteStore';

// tslint:disable:no-any
describe('compareRouteOptions', () => {
  it('Should be matched all route options of stores', () => {
    const component: ComponentType<any> = () => <div/>;
    const asyncComponent: () => Promise<{ default: ComponentType<any> }> = () => Promise.resolve({ default: component });
    
    expect(compareRouteOptions(
      new AsyncRouteStore([
        {
          path: '/a',
          component: asyncComponent,
        },
        {
          path: '/b',
          exact: true,
          component: asyncComponent,
        },
        {
          path: '/c',
          strict: true,
          component: asyncComponent,
        },
        {
          path: '/d',
          sensitive: true,
          component: asyncComponent,
        },
      ]).getRouteOptions(),
      new SyncRouteStore([
        {
          path: '/a',
          component,
        },
        {
          path: '/b',
          exact: true,
          component,
        },
        {
          path: '/c',
          strict: true,
          component,
        },
        {
          path: '/d',
          sensitive: true,
          component,
        },
      ]).getRouteOptions(),
    )).toBeTruthy();
  
    expect(compareRouteOptions(
      new AsyncRouteStore([
        {
          path: '/a',
          exact: true,
          component: asyncComponent,
        },
      ]).getRouteOptions(),
      new SyncRouteStore([
        {
          path: '/a',
          component,
        },
      ]).getRouteOptions(),
    )).toBeFalsy();
  });
});