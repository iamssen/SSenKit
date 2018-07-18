import { faFlask, faHome, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Link } from 'react-router-dom';


export interface Props {
}

interface InternalProps {
}

interface State {
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'RouterNavigation';
  
  render() {
    return (
      <ul>
        <li>
          <Link to="/">
            <h3>
              <FontAwesomeIcon icon={faHome} fixedWidth={true}/> Home
            </h3>
          </Link>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={faToolbox} fixedWidth={true}/> SSENKIT
          </h3>
          <ul>
            <li>
              <Link to="/ssenkit/autocomplete-text-input">
                Autocomplete Text Input
              </Link>
            </li>
            <li>
              <Link to="/ssenkit/date-select">
                Date Select
              </Link>
            </li>
            <li>
              <Link to="/ssenkit/dropdown-anchor">
                Dropdown Anchor
              </Link>
            </li>
            <li>
              <Link to="/ssenkit/modal">
                Modal
              </Link>
            </li>
            <li>
              <Link to="/ssenkit/restricted-text-input">
                Restricted Text Input
              </Link>
            </li>
            <li>
              <Link to="/ssenkit/recontext">
                ReContext
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={faFlask} fixedWidth={true}/> RESEARCH
          </h3>
          <ul>
            <li>
              <Link to="/research/numeral">
                Numeral.js
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Component as React.ComponentClass<Props>;