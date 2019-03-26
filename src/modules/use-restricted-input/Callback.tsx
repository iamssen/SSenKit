import React, { ChangeEvent, useCallback, useState } from 'react';
import useRestrictedInput from 'use-restricted-input';

const availableCharacters: Set<string> = new Set([
  'a', 'b', 'c', 'd', '1', '2', '3', '@', '#',
]);

export function Callback() {
  const {onKeyPress} = useRestrictedInput((char: string) => availableCharacters.has(char));
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