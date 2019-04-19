import { useLayoutEffect } from 'react';

export default function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    return function cleanUpBodyLock () {
      document.body.style.overflow = originalOverflow;
    }
  // Doing this will ensure that this only runs one time
  }, [])
}

