import { useEffect } from 'react';

const useLayoutFocusMode = () => {
  useEffect(() => {
    const layout = document.querySelector('saagie-layout');

    if (!layout) {
      return () => {};
    }

    layout.setAttribute('focus-mode', 'true');

    return () => {
      layout.removeAttribute('focus-mode');
    };
  }, []);
};

export default useLayoutFocusMode;
