import * as React from 'react';
import { Description, Source } from 'seed/components';
import Sample from './Sample.sample';
import MobX from './MobX.sample';

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
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./MobX.description.md')}/>
        </div>
      </div>
      
      <div className="box-body">
        <MobX/>
        
        <h4>context</h4>
        <Source source={require('!!raw-loader!./MobX.sample/context')}/>
        
        <h4>data/mobx</h4>
        <Source source={require('!!raw-loader!./MobX.sample/data/mobx')}/>
        
        <h4>actions/updateA</h4>
        <Source source={require('!!raw-loader!./MobX.sample/actions/updateA')}/>
        
        <h4>actions/updateB</h4>
        <Source source={require('!!raw-loader!./MobX.sample/actions/updateB')}/>
        
        <h4>components/Form</h4>
        <Source source={require('!!raw-loader!./MobX.sample/components/Form')}/>
        
        <h4>components/Print</h4>
        <Source source={require('!!raw-loader!./MobX.sample/components/Print')}/>
        
        <h4>index</h4>
        <Source source={require('!!raw-loader!./MobX.sample')}/>
      </div>
    </div>
  </div>
)