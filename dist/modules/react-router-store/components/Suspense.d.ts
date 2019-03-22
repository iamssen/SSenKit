import { ReactElement, ReactNode } from 'react';
export interface SuspenseContextProviderProps {
    children: ReactNode;
    fallback: ReactElement;
}
export interface SuspenseContextState {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}
export declare function Suspense({ children, fallback }: SuspenseContextProviderProps): JSX.Element;
export declare function useSuspenseContextState(): SuspenseContextState;
