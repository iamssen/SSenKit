import { ComponentType, createElement } from 'react';
import { matchPath, Route, RouteProps } from 'react-router';
import { renderAsyncRoute } from './renderAsyncRoute';
import { RouteOptions, RouteStore } from './RouteStore';

// tslint:disable:no-any
export interface AsyncRoute extends RouteOptions {
  component: () => Promise<{ default: ComponentType<any> }>;
}

export class AsyncRouteStore implements RouteStore {
  private preloadIndex: Map<AsyncRoute, ComponentType<any>>;
  
  constructor(private routes: AsyncRoute[]) {
    this.preloadIndex = new Map();
  }
  
  preload = (path: string) => {
    return new Promise<void>((resolve, reject) => {
      const config: AsyncRoute | undefined = this.routes.find(({ component, ...routeProps }) => {
        return matchPath(path, { ...routeProps }) !== null;
      });
      
      if (config) {
        config.component().then(({ default: Component }) => {
          this.preloadIndex.set(config, Component);
          resolve();
        });
      } else {
        reject(new Error(`Can't find matched route from "${path}"`));
      }
    });
  };
  
  getRoute = (path: string) => {
    const route: AsyncRoute | undefined = this.routes.find(r => r.path === path);
    
    if (route) {
      const { component, ...routeProps } = route;
      const props: RouteProps = { ...routeProps };
      
      if (this.preloadIndex.has(route)) {
        props.component = this.preloadIndex.get(route);
      } else {
        props.render = renderAsyncRoute(component);
      }
      
      return createElement(Route, { ...props, key: path });
    } else {
      throw new Error(`Can't find matched route from "${path}"`);
    }
  };
  
  getAllRoutes = () => {
    return this.routes.map(({ path }) => this.getRoute(path));
  };
  
  getRouteOptions = () => {
    return this.routes.map(({ component, ...routeOption }) => routeOption);
  };
}