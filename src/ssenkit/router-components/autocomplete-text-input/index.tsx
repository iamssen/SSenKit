import * as React from 'react';
import { Description, Source } from 'seed/components';
import MultipleAutoCompleteTextInput from './MultipleAutoCompleteTextInput.sample';
import SingleAutoCompleteTextInput from './SingleAutoCompleteTextInput.sample';

export default () => (
  <div className="app-body">
    <div className="page-header">
      <div className="row">
        <h1>
          <code>import {`{ SingleAutoCompleteTextInput, MultipleAutoCompleteTextInput }`} from 'ssenkit.autocomplete-text-input'</code>
        </h1>
      </div>
    </div>
    <div className="page-body ph-30 mv-30">
      <div className="box">
        <div className="box-body">
          <Description html={require('./MultipleAutoCompleteTextInput.description.md')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <MultipleAutoCompleteTextInput/>
          <Source source={require('!!raw-loader!./MultipleAutoCompleteTextInput.sample')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <Description html={require('./SingleAutoCompleteTextInput.description.md')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <SingleAutoCompleteTextInput/>
          <Source source={require('!!raw-loader!./SingleAutoCompleteTextInput.sample')}/>
        </div>
      </div>
    </div>
  </div>
)