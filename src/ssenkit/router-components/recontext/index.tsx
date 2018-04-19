import * as React from 'react';
import { Description, Source } from 'common/components/showcase';
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
          
          <h4>context</h4>
          <Source source={require('!!raw-loader!./Sample.sample/context')}/>
          
          <h4>actions/updateB</h4>
          <Source source={require('!!raw-loader!./Sample.sample/actions/updateB')}/>
  
          <h4>actions/init</h4>
          <Source source={require('!!raw-loader!./Sample.sample/actions/init')}/>
          
          <h4>components/Print</h4>
          <Source source={require('!!raw-loader!./Sample.sample/components/Print')}/>
          
          <h4>components/UpdateA</h4>
          <Source source={require('!!raw-loader!./Sample.sample/components/UpdateA')}/>
          
          <h4>components/UpdateB</h4>
          <Source source={require('!!raw-loader!./Sample.sample/components/UpdateB')}/>
  
          <h4>components/UpdateX</h4>
          <Source source={require('!!raw-loader!./Sample.sample/components/UpdateX')}/>
  
          <h4>components/UpdateY</h4>
          <Source source={require('!!raw-loader!./Sample.sample/components/UpdateY')}/>
  
          <h4>data/test</h4>
          <Source source={require('!!raw-loader!./Sample.sample/data/test')}/>
          
          <h4>index</h4>
          <Source source={require('!!raw-loader!./Sample.sample')}/>
        </div>
      </div>
    </div>
  </div>
)