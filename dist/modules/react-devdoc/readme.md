# Installation

```
npm install react-devdoc
```

Simply `react-markdown` and `prismjs` wrapper components;

# Usage

```typescript jsx
import React from 'react';
import { Markdown, CodeBlock } from 'react-devdocs';

// ⭐️ load prismjs theme
import 'prismjs/themes/prism-okaidia.css';

import { SampleComponent } from './sample';

export function Component() {
  return (
    <div>
      {/* ⭐️ Set webpack *.md file loader to raw-loader */}
      <Markdown text={require('!!raw-loader!./sample.md')}/>
      <SampleComponent/>
      {/* ⭐️ Get source code use raw-loader */}
      <CodeBlock value={require('!!raw-loader!./sample')} language="tsx"/>
    </div> 
  );
}
```

