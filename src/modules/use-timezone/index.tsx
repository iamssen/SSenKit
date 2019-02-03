import React from 'react';
import { Markdown } from 'react-devdoc';

export default function () {
  return (
    <div>
      <Markdown text={require('../../_modules/use-timezone/readme.md')}/>
    </div>
  );
}