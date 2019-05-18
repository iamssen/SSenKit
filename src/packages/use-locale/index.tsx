import React from 'react';
import { Markdown } from 'react-devdoc';

export default function () {
  return (
    <div>
      <Markdown text={require('use-locale/readme.md')}/>
    </div>
  );
}