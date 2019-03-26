# Installation

```
npm install use-restricted-input
```

# Usage

```typescript jsx
import React, { ChangeEvent } from 'react';
import useRestrictedInput from 'use-restricted-input';

export function Component() {
  const {onKeyPress} = useRestrictedInput('abcd0-9');
  const [text, setText] = useState<string>('');
  
  const onChange: (event: ChangeEvent<HTMLInputElement>) => void = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, [setText]);
  
  return (
    <div>
      <input type="text"
             value={text}
             onChange={onChange}
             onKeyPress={onKeyPress}/>
      <p>
        text is "{text}"
      </p>
    </div>
  );
}
```

# API

```
useRestrictedInput(availableCharacters: string | ((character: string) => boolean)): { onKeyPress: (event: KeyboardEvent<InputElement>) => void }
```

- param
  - `availableCharacters: string | ((character: string) => boolean)`
    - `a-z0-9` or `abcde0-4#$`
    - `(character: string) => boolean`
- return
  - `onKeyPress: (event: KeyboardEvent<InputElement>) => void`