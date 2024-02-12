import {ChangeEvent, useCallback, useState} from 'react';
import {ISelectInput} from '@/modules/SelectInput/interfaces/ISelectInput';

// Стандартный компонент для поля выбора.
export const SelectInput = ({data, style, onChange}: ISelectInput) => {
  const [value, setValue] = useState('');

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  }

  const renderOptions = useCallback(() => {
    return data.map((item, i) => (
      <optgroup key={i} label={item.title}>
        {item.options.map((option, j) => (
          <option key={j} label={option} value={option} />
        ))}
      </optgroup>
    ))
  }, [data]);

  return (
    <select value={value} onChange={onSelectChange} style={style}>
      <option disabled value={''}></option>
      {renderOptions()}
    </select>
  )
}