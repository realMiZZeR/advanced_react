import {useEffect, useState} from 'react';
import {useThrottle} from '@/hooks/useThrottle';

export const ThrottleTest = () => {
  const [throttleValue, setThrottleValue] = useState(0);
  const [commonValue, setCommonValue] = useState(0);

  const throttleFunc = useThrottle(() => setThrottleValue(prev => prev + 1), 2);
  const commonFunc = () => setCommonValue(prev => prev + 1);

  useEffect(() => {
    window.addEventListener('resize', throttleFunc);
    window.addEventListener('resize', commonFunc);

    return () => {
      window.removeEventListener('resize', throttleFunc);
      window.removeEventListener('resize', commonFunc);
    }
  }, []);

  return (
    <div>
      <h2>Throttling resize call function</h2>
      <p>Throttle: {throttleValue}</p>
      <p>No throttle: {commonValue}</p>
    </div>
  )
}