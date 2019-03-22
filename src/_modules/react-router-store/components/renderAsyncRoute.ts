import { ComponentType, createElement, ReactElement, ReactNode, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSuspenseContextState } from './Suspense';

// tslint:disable:no-any
interface Props {
  props: object;
  load: Promise<{default: ComponentType<any>}>;
}

function AsyncRouteRenderer({load, props}: Props) {
  const [component, setComponent] = useState<ReactElement<any> | null>(null);
  const {setLoading} = useSuspenseContextState();
  
  useEffect(() => {
    setLoading(true);
    
    load.then(({default: Component}: {default: ComponentType<any>}) => {
      setComponent(createElement(Component, props));
      setLoading(false);
    });
  }, []);
  
  return component;
}

export function renderAsyncRoute(load: () => Promise<{default: ComponentType<any>}>): ((props: RouteComponentProps<any>) => ReactNode) {
  return (props: RouteComponentProps<any>) => createElement(AsyncRouteRenderer, {
    props,
    load: load(),
  });
}