import * as React from 'react';
import { Description, Source } from 'seed/components';
import DropdownAnchor from './DropdownAnchor.sample';

export default () => (
  <div className="app-body">
    <div className="page-header">
      <div className="row">
        <h1><code>import DropdownAnchor from 'ssenkit.dropdown-anchor'</code></h1>
      </div>
    </div>
    <div className="page-body ph-30 mv-30">
      <div className="box">
        <div className="box-body content is-small">
          <Description html={require('./DropdownAnchor.description.md')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <DropdownAnchor/>
          <Source source={require('!!raw-loader!./DropdownAnchor.sample')}/>
        </div>
      </div>
    </div>
  </div>
)