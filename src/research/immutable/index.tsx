import React from 'react';
import { CodeBlock, Markdown } from 'react-devdoc';

export default function () {
  return (
    <div>
      <Markdown text={require('./readme.md')}/>
      
      <h2>Collection</h2>
      <CodeBlock value={require('!!raw-loader!./Collection.test')} language="typescript"/>
      
      <h2>Collection.Indexed</h2>
      <CodeBlock value={require('!!raw-loader!./Collection.Indexed.test')} language="typescript"/>
      
      <h2>Collection.Keyed</h2>
      <CodeBlock value={require('!!raw-loader!./Collection.Keyed.test')} language="typescript"/>
      
      <h2>List</h2>
      <CodeBlock value={require('!!raw-loader!./List.test')} language="typescript"/>
  
      <h2>Map</h2>
      <CodeBlock value={require('!!raw-loader!./Map.test')} language="typescript"/>
      
      <h2>Stack</h2>
      <CodeBlock value={require('!!raw-loader!./Stack.test')} language="typescript"/>
  
      <h2>Tree</h2>
      <CodeBlock value={require('!!raw-loader!./Tree.test')} language="typescript"/>
    </div>
  );
}