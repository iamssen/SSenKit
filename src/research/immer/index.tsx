import React from 'react';
import { CodeBlock, Markdown } from 'react-devdoc';

// tslint:disable:no-default-export
export default function () {
  return (
    <div>
      <Markdown text={require('./readme.md')}/>
      <CodeBlock value={require('!!raw-loader!./immer.test.ts')} language="typescript"/>
    </div>
  );
}