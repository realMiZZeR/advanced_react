import {useThrottle} from '@/hooks/useThrottle';
import {useEffect, useState} from 'react';

interface IWindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  const [size, setSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  })
  const throttleResize = useThrottle(() => {
    if (typeof window === 'undefined') return;

    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 10);

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener('resize', throttleResize);

    return () => {
      window.removeEventListener('resize', throttleResize);
    }
  }, []);

  return size;
}