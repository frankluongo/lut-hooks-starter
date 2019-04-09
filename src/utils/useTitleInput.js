import { useState, useEffect } from 'react';

export function useTitleInput(initialValue) {
  const [value, setValue] = useState('');

  useEffect(() => {
    document.title = value;
  })

  return [value, setValue];
}
