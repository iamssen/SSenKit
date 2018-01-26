import * as React from 'react';
import { Route, RouteProps } from 'react-router';

// tslint:disable
export interface SyncRouterStoreConfig {
  path: string;
  exact?: boolean;
  strict?: boolean;
  component: React.ComponentType<any>;
}

export default class {
  constructor(private config: SyncRouterStoreConfig[]) {
  }
  
  getRoute = (path: string) => {
    const config: SyncRouterStoreConfig = this.config.find(config => config.path === path);
    
    if (config) {
      const props: RouteProps = {};
      props.path = config.path;
      props.exact = config.exact === true;
      props.strict = config.strict === true;
      props.component = config.component;
      
      return React.createElement(Route, props);
    } else {
      throw new Error(`Can't find matched path. ${path}`);
    }
  };
}