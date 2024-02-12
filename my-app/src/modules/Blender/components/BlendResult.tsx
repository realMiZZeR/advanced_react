import {useEffect, useState} from 'react';
import {useBlenderContext} from '@/modules/Blender/BlenderContext';

// Результат слияния двух чисел.
export const BlendResult = () => {
  const {values} = useBlenderContext();
  const [result, setResult] = useState('?');

  useEffect(() => {
    if (values.length === 0) {
      setResult('?');
      return;
    }

    setResult(values.join(''));
  }, [values]);

  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}