import { ComponentType } from 'react';
import { Route } from 'react-router';
import { RouteOptions, RouteStore } from './RouteStore';
export interface SyncRoute extends RouteOptions {
    component: ComponentType<any>;
}
export declare class SyncRouteStore implements RouteStore {
    private routes;
    constructor(routes: SyncRoute[]);
    preload: (path: string) => Promise<void>;
    getRoute: (path: string) => import("react").ComponentElement<import("react-router").RouteProps, Route<import("react-router").RouteProps>>;
    getAllRoutes: () => import("react").ComponentElement<import("react-router").RouteProps, Route<import("react-router").RouteProps>>[];
    getRouteOptions: () => {
        path: string;
        exact?: boolean | undefined;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
    }[];
}
