import { useLayoutEffect } from 'react';

export default function useBodyScrollLock() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
  })
}

