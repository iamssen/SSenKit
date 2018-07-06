import * as React from 'react';
export declare type Teardown = () => void;
export declare type Action<ContextState> = (contextState: ContextState) => (Teardown | void);
export declare type Subscription<ContextState> = (state: ContextState, prevState: ContextState) => void;
export declare type ContextState<T> = T & {
    dispatch: (action: Action<ContextState<T>>) => Teardown;
    subscribe: (subscription: (state: ContextState<T>, prevState: ContextState<T>) => void) => Teardown;
};
export declare class Provider<ContextState, Props = {}, State = {}> extends React.Component<Props, State & {
    contextState: ContextState;
}> {
    static displayName: string;
    private teardowns;
    private subscriptions;
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State & {
        contextState: ContextState;
    }>): void;
    componentWillUnmount(): void;
    protected setContextState: (stateOrProducer: Partial<ContextState> | ((contextState: ContextState) => Partial<ContextState>)) => void;
    protected dispatch: (action: Action<ContextState>) => Teardown;
    protected subscribe: (subscription: (state: ContextState, prevState: ContextState) => void) => Teardown;
    protected bindReducer: (getState?: (contextState: ContextState) => any) => (reducer: Function) => (setState: (result: any) => Partial<ContextState>) => any;
}
