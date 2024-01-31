import {useEffect, useState} from 'react';

/**
 * Хук, который отслеживает нажатие определенной клавиши
 */
export const useKeyboard = () => {
  const [currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      setCurrentKey(event.key);
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, []);

  return currentKey;
}