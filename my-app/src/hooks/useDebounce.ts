import {useEffect} from 'react';

/**
 * Хук, который реализует debouncing
 * @param callback Функция, которая выполнится после определённого промежутка времени.
 * @param delay Задержка в миллисекундах, спустя которое функции будет дозволено выполниться.
 */
export const useDebounce = (callback: Function, delay = 1000) => {
  useEffect(() => {
    const debounce = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(debounce);
    }
  }, [callback, delay]);
}