import { ReactElement } from 'react';

// tslint:disable:no-any
export interface RouteOptions {
  path: string;
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}

export interface RouteStore {
  preload: (path: string) => Promise<void>;
  getRoute: (path: string) => ReactElement<any> | undefined;
  getAllRoutes: () => ReactElement<any>[];
  getRouteOptions: () => RouteOptions[];
}