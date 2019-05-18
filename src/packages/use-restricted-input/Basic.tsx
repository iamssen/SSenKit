import React, { ChangeEvent, useCallback, useState } from 'react';
import useRestrictedInput from 'use-restricted-input';

export function Basic() {
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