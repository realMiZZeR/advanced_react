// import {afterEach, describe, expect, it, jest} from '@jest/globals';
// import {fetchTodos} from '@/modules/TodoList/scripts/fetchTodos';
//
// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => Promise.resolve([{
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }]),
// })) as any;
//
// describe('fetchTodos', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//   it('should fetch todos and return them as an array', async () => {
//     const todos = await fetchTodos();
//     expect(todos).toEqual([{
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     }])
//     expect(fetch).toHaveBeenCalledTimes(1);
//     expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos')
//   });
// });