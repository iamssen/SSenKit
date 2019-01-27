import { ComponentType, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';
export declare function renderAsyncRoute(load: () => Promise<{
    default: ComponentType<any>;
}>): ((props: RouteComponentProps<any>) => ReactNode);
