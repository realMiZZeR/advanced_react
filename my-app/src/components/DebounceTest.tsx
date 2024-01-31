import {useDebounce} from '@/hooks/useDebounce';
import {useKeyboard} from '@/hooks/useKeyboard';
import {useEffect, useState} from 'react';

export const DebounceTest = () => {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');
  const pressedKey = useKeyboard();

  useEffect(() => {
    setText(prev => `${prev}${pressedKey}`);
  }, [pressedKey]);

  useDebounce(() => {
    setOutput(text);
  });

  return (
    <div>
      <p>
        <strong>Debounce message: </strong>
        <span>{output}</span>
      </p>
    </div>
  )
}