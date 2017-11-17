import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  render() {
    return [
      <Link to="/showcase">Home</Link>,
      <Link to="/showcase/sample">Sample</Link>,
      <Link to="/showcase/ssenkit/autocomplete-text-input">SSenKit AutocompleteTextInput</Link>,
      <Link to="/showcase/ssenkit/date-select">SSenKit DateSelect</Link>,
      <Link to="/showcase/ssenkit/dropdown-anchor">SSenKit DropdownAnchor</Link>,
      <Link to="/showcase/ssenkit/modal">SSenkit Modal</Link>,
      <Link to="/showcase/ssenkit/restricted-text-input">SSenkit RestrictedTextInput</Link>,
    ];
  }
}

export default Component as React.ComponentClass<Props>;