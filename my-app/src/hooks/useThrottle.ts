import {useRef} from 'react';

/**
 * Хук, который реализует throttling
 * @param callback Функция для выполнения.
 * @param callFrequency Количество вызовов функции в секунду.
 */
export const useThrottle = (callback: Function, callFrequency: number) => {
  const skip = useRef(false);

  return () => {
    if (skip.current) return;
    skip.current = true;

    setTimeout(() => {
      callback();
      skip.current = false;
    }, 1000 / callFrequency);
  }
}