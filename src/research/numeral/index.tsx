import * as React from 'react';
import { Description, Source } from 'seed/components';

export default () => (
  <div className="app-body">
    <div className="page-header">
      <div className="row">
        <h1><code>Numeral.js Test</code></h1>
      </div>
    </div>
    <div className="page-body ph-30 mv-30">
      {/*<div className="box">*/}
      {/*<div className="box-body">*/}
      {/*<Description html={require('./Sample.description.md')}/>*/}
      {/*</div>*/}
      {/*</div>*/}
      
      <div className="box">
        <div className="box-body">
          <Source source={require('!!raw-loader!./numeral.test.ts')}/>
        </div>
      </div>
    </div>
  </div>
)