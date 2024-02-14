import {ITodo} from '@/modules/TodoList/interfaces/ITodo';

export const fetchTodos = async (): Promise<ITodo[]> => {
  const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  return data;
}