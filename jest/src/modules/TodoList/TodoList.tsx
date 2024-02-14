import {useEffect, useState} from 'react';
import {ITodo} from '@/modules/TodoList/interfaces/ITodo';
import {TodoItem} from '@/modules/TodoList/components/TodoItem';
import {fetchTodos} from '@/modules/TodoList/scripts/fetchTodos';

export const TodoList = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos().then(data => setTodos(data));
  }, []);

  return (
    <ul>
      {todos && todos.map(item => (
        <TodoItem
          key={item.id}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </ul>
  );
}