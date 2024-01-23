const list = [1, 2, 3, 4, 5];

const getLazy = obj => {

  const iterator = typeof obj.next === 'function'
    ? obj
    : obj[Symbol.iterator]();

  return new Proxy(
    obj,
    {
      get(_, prop) {
        switch (prop) {

          // Возвращает итерируемый объект.
          case 'map':

            // Здесь принимается callback функции map.
            return f => {

              // Здесь возвращается Proxy объект, по которому можно будет итерироваться.
              // Над объектом производятся действия из callback'а.
              // Spread автоматически будет вызывать метод next.
              return getLazy({
                [Symbol.iterator]() { return this; },
                index: 0,
                next() {
                  const {value, done} = iterator.next();
                  if (done) {
                    return {done}
                  }
                  return {done, value: f(value, this.index++)}
                },
              });

            }

          // Позволяет извлечь определённое количество элементов из массива.
          case 'take':
            return (count) => {
              return getLazy({
                [Symbol.iterator]() { return this; },
                next() {
                  return count-- ? iterator.next() : {done: true}
                }
              })
            };
          default:
            return Reflect.get(...arguments);
        }
      },
    },
  );
}

const lazy = getLazy(list)
  .map(x => x + 10)
  .map((x, i) => {
    if (i === 3) {
      throw 'Oops';
    }
    return x;
  })
  .take(3);

console.log(...lazy);
