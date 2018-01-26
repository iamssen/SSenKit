import routerStore from 'app/route/asyncRouterStore';
import * as React from 'react';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'AsyncRouterContents';
  
  render() {
    return [
      routerStore.getRoute('/'),
      routerStore.getRoute('/ssenkit/autocomplete-text-input'),
      routerStore.getRoute('/ssenkit/date-select'),
      routerStore.getRoute('/ssenkit/dropdown-anchor'),
      routerStore.getRoute('/ssenkit/modal'),
      routerStore.getRoute('/ssenkit/restricted-text-input'),
    ].map((comp, i) => React.cloneElement(comp, {key: 'router-' + i}));
  }
}

export default Component as React.ComponentClass<Props>;