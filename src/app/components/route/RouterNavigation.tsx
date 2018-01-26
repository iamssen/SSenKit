import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'RouterNavigation';
  
  render() {
    return [
      <Link to="/">Home</Link>,
      <Link to="/ssenkit/autocomplete-text-input">Autocomplete Text Input</Link>,
      <Link to="/ssenkit/date-select">Date Select</Link>,
      <Link to="/ssenkit/dropdown-anchor">Dropdown Anchor</Link>,
      <Link to="/ssenkit/modal">Modal</Link>,
      <Link to="/ssenkit/restricted-text-input">Restricted Text Input</Link>,
    ].map((comp, i) => React.cloneElement(comp, {key: 'router-nav-' + i}));
  }
}

export default Component as React.ComponentClass<Props>;