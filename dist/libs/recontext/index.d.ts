/// <reference types="react" />
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
    protected dispatch: (action: Action<ContextState>) => () => void;
    protected subscribe: (subscription: (prevState: ContextState, state: ContextState) => void) => () => void;
    updateStore: (prevStore: any, nextStore: any) => void;
}
export declare type CreateStore<State, Actions> = (provider: Provider<{}>, initialState: State) => State & Actions;
export declare type ActionsInput<State, Actions> = {
    [A in keyof Actions]: (state: State) => Actions[A];
};
export declare function createStore<State, Actions>(config: (setState: (state: Partial<State>) => void) => ActionsInput<State, Actions>): ((provider: Provider<{}>, initialState: State) => State & Actions);
