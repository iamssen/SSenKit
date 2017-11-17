import { Description, Source } from 'app/components';
import * as React from 'react';
import Sample from './Sample.sample';

export default () => (
  <div className="app-body">
    <div className="page-header">
      <div className="row">
        <h1><code>import RestrictedTextInput from 'ssenkit.restricted-text-input'</code></h1>
      </div>
    </div>
    <div className="page-body ph-30 mv-30">
      <div className="box">
        <div className="box-body">
          <Description html={require('./Sample.description.md')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <Sample/>
          <Source source={require('!!raw-loader!./Sample.sample')}/>
        </div>
      </div>
    </div>
  </div>
)