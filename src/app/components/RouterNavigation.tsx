import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function RouterNavigation() {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/module-samples/react-devdoc">react-devdoc</Link>
      <Link to="/research/immer">immer</Link>
      <Link to="/research/immutable">immutable</Link>
      <Link to="/research/numeral">numeral</Link>
    </Fragment>
  );
}