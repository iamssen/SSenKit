import React from 'react';
import { CodeBlock, Markdown } from 'react-devdoc';

// tslint:disable:no-default-export
export default function () {
  return (
    <div>
      <Markdown text={require('./readme.md')}/>
      <CodeBlock value={require('!!raw-loader!./Collection.Indexed.test')} language="typescript"/>
      <CodeBlock value={require('!!raw-loader!./Collection.Keyed.test')} language="typescript"/>
      <CodeBlock value={require('!!raw-loader!./Collection.test')} language="typescript"/>
      <CodeBlock value={require('!!raw-loader!./List.test')} language="typescript"/>
      <CodeBlock value={require('!!raw-loader!./Stack.test')} language="typescript"/>
      <CodeBlock value={require('!!raw-loader!./Map.test')} language="typescript"/>
      <CodeBlock value={require('!!raw-loader!./Tree.test')} language="typescript"/>
    </div>
  );
}