import { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router';
import { RouteOptions, RouteStore } from './RouteStore';
export interface AsyncRoute extends RouteOptions {
    component: () => Promise<{
        default: ComponentType<any>;
    }>;
}
export declare class AsyncRouteStore implements RouteStore {
    private routes;
    private preloadIndex;
    constructor(routes: AsyncRoute[]);
    preload: (path: string) => Promise<void>;
    getRoute: (path: string) => import("react").ComponentElement<RouteProps, Route<RouteProps>>;
    getAllRoutes: () => import("react").ComponentElement<RouteProps, Route<RouteProps>>[];
    getRouteOptions: () => {
        path: string;
        exact?: boolean | undefined;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
    }[];
}
