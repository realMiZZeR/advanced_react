const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const wait = async (value, time) => (
  new Promise(resolve => setTimeout(() => {
    resolve(value);
    }, time))
);

const getLazy = obj => {

  function* mapGenerator(f) {
    let index = 0;
    for (const value of obj) {
      yield f(value, index++)
    }
  }

  function* filterGenerator(predicate) {
    for (const value of obj) {
      if (!predicate(value)) continue;
      yield value;
    }
  }

  function* takeGenerator(count) {
    let index = 0;
    for (const value of obj) {
      if (index >= count) break;
      yield value;
      index++;
    }
  }

  // С небольшой задержкой возвращает данные из
  async function* takeAsyncGenerator(count) {
    let index = 0;
    for await (const value of obj) {
      if (index >= count) break;
      yield await wait(value, 1000);
      index++;
    }
  }

  return new Proxy(
    obj,
    {
      get(_, prop) {
        switch (prop) {

          // Кейсы возвращают итерируемые объекты.
          // Производит определённое действие над значением.
          case 'map':
            return f => getLazy({
              [Symbol.iterator]() {return mapGenerator(f)}
            });

          // Убирает лишние значения из итерируемого объекта по заданному условию.
          case 'filter':
            return predicate => getLazy({
              [Symbol.iterator]() {return filterGenerator(predicate)}
            })

          // Устанавливает количество возвращаемых элементов.
          case 'take':
            return (count) => getLazy({
              [Symbol.iterator]() {return takeGenerator(count)},
              [Symbol.asyncIterator]() {return takeAsyncGenerator(count)}
            })

          default:
            return Reflect.get(...arguments);
        }
      },
    },
  );
}

const lazy = getLazy(list);


const print = async () => {
  const promiseData = lazy
    .map(x => x + 10)
    .map(x => x ** 2)
    .filter(x => x % 2 === 0)
    .take(3);
  
  for await (const value of promiseData) {
    console.log(value);
  }

  await wait(1000);
  return 'print end'
}

print().then(m => console.log(m));
