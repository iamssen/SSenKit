import * as React from 'react';
import { matchPath, Route, RouteProps } from 'react-router';
import render from './render';

// tslint:disable
export interface AsyncRouterStoreConfig {
  path: string;
  exact?: boolean;
  strict?: boolean;
  component: () => Promise<{default: React.ComponentType<any>}>;
}

export default class {
  private preloadIndex: Map<AsyncRouterStoreConfig, React.ComponentType<any>>;
  
  constructor(private config: AsyncRouterStoreConfig[]) {
    this.preloadIndex = new Map<AsyncRouterStoreConfig, React.ComponentType<any>>();
  }
  
  preload = (location: string) => {
    return new Promise((resolve, reject) => {
      const config: AsyncRouterStoreConfig = this.config.find(config => {
        const props: RouteProps = {};
        props.path = config.path;
        props.exact = config.exact === true;
        props.strict = config.strict === true;
        return matchPath(location, props) !== null;
      });
      
      if (config) {
        config.component().then(({default: Component}) => {
          this.preloadIndex.set(config, Component);
          resolve();
        });
      } else {
        reject(new Error(`Can't find matched route. ${location}`));
      }
    });
  };
  
  getRoute = (path: string) => {
    const config: AsyncRouterStoreConfig = this.config.find(config => config.path === path);
    
    if (config) {
      const props: RouteProps = {};
      props.path = config.path;
      props.exact = config.exact === true;
      props.strict = config.strict === true;
      
      if (this.preloadIndex.has(config)) {
        props.component = this.preloadIndex.get(config);
      } else {
        props.render = render(config.component);
      }
      
      return React.createElement(Route, props);
    } else {
      throw new Error(`Can't find matched path. ${path}`);
    }
  };
}