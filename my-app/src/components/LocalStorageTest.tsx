import {useLocalStorage} from '@/hooks/useLocalStorage';
import {ChangeEvent, useCallback, useState} from 'react';

export const LocalStorageTest = () => {
  const [name, setName, isReady] = useLocalStorage('user', '');
  const [inputValue, setInputValue] = useState('');

  const onInputValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const onClick = useCallback(() => {
    console.log(inputValue);
    setName(inputValue);
  }, [inputValue]);

  return (
    <div>
      <h3>Local Storage</h3>
      <div>
        <input value={inputValue} onChange={onInputValueChange} placeholder={'value'}  />
        <button onClick={onClick}>Set Value</button>
      </div>
      <p>localstorage.key = {isReady && name}</p>
    </div>
  )
}