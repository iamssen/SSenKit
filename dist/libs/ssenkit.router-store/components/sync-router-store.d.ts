/// <reference types="react" />
import * as React from 'react';
import { Route } from 'react-router';
export interface SyncRouterStoreConfig {
    path: string;
    exact?: boolean;
    strict?: boolean;
    component: React.ComponentType<any>;
}
export default class  {
    private config;
    constructor(config: SyncRouterStoreConfig[]);
    getRoute: (path: string) => React.ComponentElement<any, Route<any>>;
}
