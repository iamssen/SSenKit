/// <reference types="react" />
import * as React from 'react';
import { Route, RouteProps } from 'react-router';
export interface AsyncRouterStoreConfig {
    path: string;
    exact?: boolean;
    strict?: boolean;
    component: () => Promise<{
        default: React.ComponentType<any>;
    }>;
}
export default class  {
    private config;
    private preloadIndex;
    constructor(config: AsyncRouterStoreConfig[]);
    preload: (location: string) => Promise<{}>;
    getRoute: (path: string) => React.ComponentElement<Readonly<{
        children?: React.ReactNode;
    }> & Readonly<RouteProps>, Route<RouteProps>>;
}
