import React, { Context, ReactElement, ReactNode, useContext, useState } from 'react';

export interface SuspenseContextProviderProps {
  children: ReactNode;
  fallback: ReactElement;
}

export interface SuspenseContextState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const SuspenseContext: Context<SuspenseContextState> = React.createContext<SuspenseContextState>({
  loading: false,
  setLoading: (loading: boolean) => {
    // DO NOTHING
  },
});

export function Suspense({children, fallback}: SuspenseContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  
  return (
    <SuspenseContext.Provider value={{
      loading,
      setLoading,
    }}>
      {children}
      {loading && fallback}
    </SuspenseContext.Provider>
  );
}

export function useSuspenseContextState(): SuspenseContextState {
  return useContext(SuspenseContext);
}