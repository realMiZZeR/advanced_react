import { mock } from "@/__mocks__/fetchTodos";
import {fetchTodos} from '@/modules/TodoList/scripts/fetchTodos';

jest.mock('@/modules/TodoList/scripts/fetchTodos', () => ({
  fetchTodos: jest.fn().mockResolvedValueOnce(mock),
}));

afterEach(() => {
  jest.clearAllMocks();
});

it('fetch todos and return them as an array', async () => {
  const todos = await fetchTodos();
  console.log(todos);
  expect(Array.isArray(todos)).toBeTruthy();
  expect(todos.length).toBeGreaterThan(0);
});