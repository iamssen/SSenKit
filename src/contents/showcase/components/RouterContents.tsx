import * as React from 'react';
import { Route } from 'react-router-dom';
import Main from '../contents/main';
import Sample from '../contents/sample';
import SSenkitAutocompleteTextInput from '../contents/ssenkit.autocomplete-text-input';
import SSenKitDateSelect from '../contents/ssenkit.date-select';
import SSenkitDropdownAnchor from '../contents/ssenkit.dropdown-anchor';
import SSenkitModal from '../contents/ssenkit.modal';
import SSenkitRestrictedTextInput from '../contents/ssenkit.restricted-text-input';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  render() {
    return [
      <Route exact path="/showcase" component={Main}/>,
      <Route path="/showcase/sample" component={Sample}/>,
      <Route path="/showcase/ssenkit/autocomplete-text-input" component={SSenkitAutocompleteTextInput}/>,
      <Route path="/showcase/ssenkit/date-select" component={SSenKitDateSelect}/>,
      <Route path="/showcase/ssenkit/dropdown-anchor" component={SSenkitDropdownAnchor}/>,
      <Route path="/showcase/ssenkit/modal" component={SSenkitModal}/>,
      <Route path="/showcase/ssenkit/restricted-text-input" component={SSenkitRestrictedTextInput}/>,
    ];
  }
}

export default Component as React.ComponentClass<Props>;