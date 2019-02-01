import { ComponentType, createElement } from 'react';
import { Route } from 'react-router';
import { RouteOptions, RouteStore } from './RouteStore';

// tslint:disable:no-any
export interface SyncRoute extends RouteOptions {
  component: ComponentType<any>;
}

export class SyncRouteStore implements RouteStore {
  constructor(private routes: SyncRoute[]) {
  }
  
  preload = (path: string) => {
    return Promise.resolve();
  };
  
  getRoute = (path: string) => {
    const route: SyncRoute | undefined = this.routes.find((r: SyncRoute) => r.path === path);
    
    if (route) {
      return createElement(Route, {...route, key: path});
    } else {
      throw new Error(`Can't find matched path. ${path}`);
    }
  };
  
  getAllRoutes = () => {
    return this.routes.map(({path}: SyncRoute) => this.getRoute(path));
  };
  
  getRouteOptions = () => {
    return this.routes.map(({component, ...routeOption}: SyncRoute) => routeOption);
  };
}