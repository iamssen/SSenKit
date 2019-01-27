import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function RouterNavigation() {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/react-devdoc">react-devdoc</Link>
    </Fragment>
  );
}