import {useState} from 'react';

interface ITodoItemProps {
  title: string;
  completed: boolean;
}

export const TodoItem = ({title, completed}: ITodoItemProps) => {

  const [checked, setChecked] = useState(completed);

  const onChangeCheckbox = () => {
    setChecked(prev => !prev);
  }

  return (
    <li>
      <span>{title}</span>
      <input type={'checkbox'} checked={checked} onChange={onChangeCheckbox} />
    </li>
  )
}