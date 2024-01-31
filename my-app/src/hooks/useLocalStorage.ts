import {useEffect, useState} from 'react';

/**
 * Хук, синхронизирующий состояние с local storage, например, чтобы оно сохранялось при обновлении страницы
 * @param key Ключ из localStorage.
 * @param initialValue Начальное значение ключа.
 */
export const useLocalStorage = (key: string, initialValue: string) => {
  const [isReady, setIsReady] = useState(false);

  const [storage, setStorage] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    // Это необходимо, т.к. используется библиотека next.js,
    // в которой при инициализации страницы ещё не существует как такого объекта window.
    setIsReady(true);
  }, []);

  // Позволяет установить значение для текущего ключа.
  const setValue = (value: string) => {
    try {
      setStorage(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  return [storage, setValue, isReady];
}