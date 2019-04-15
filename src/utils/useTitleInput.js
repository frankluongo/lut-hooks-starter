import { useState, useEffect, useDebugValue } from 'react';

export function useTitleInput(initialValue) {
  const [value, setValue] = useState('');

  useEffect(() => {
    document.title = value;
  })

  useDebugValue(value);

  return [value, setValue];
}
