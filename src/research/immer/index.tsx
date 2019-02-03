import React from 'react';
import { CodeBlock, Markdown } from 'react-devdoc';

export default function () {
  return (
    <div>
      <Markdown text={require('./readme.md')}/>
      <CodeBlock value={require('!!raw-loader!./immer.test.ts')} language="typescript"/>
    </div>
  );
}