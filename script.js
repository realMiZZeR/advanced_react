// Фабрика для создания функций, которые будут храниться в очереди выполняться с задержкой.
function createDelayFunction(original,
                             {
                               delay,
                               delaySinceCompletion,
                               waitForPrevious,
                               queueLimit
                             }) {
  const queue = [];
  let lastCallTime = 0;
  let isRunning = false;

  // Итерация по очереди.
  const next = () => {
    if (queue.length === 0) return;
    isRunning = true;

    const currentArgs = queue.shift();
    const now = Date.now();

    if (delaySinceCompletion) {
      delay -= (now - lastCallTime);
    }

    lastCallTime = now + delay;
    original.apply(null, currentArgs)

    // Вызов следующей функции через заданное количество времени.
    setTimeout(() => {
      isRunning = false;
      next();
    }, delay);
  }

  // Добавляет функцию в очередь.
  return async (...args) => {
    queue.push(args);

    if (queue.length >= queueLimit) {
      throw new Error('Queue limit had reached.');
    }

    // Метод next сам остановится.
    if (isRunning) return;

    // Пока выполняется функция, дальше не идёт.
    if (waitForPrevious && isRunning) {
      await new Promise(resolve => {
        while (isRunning) { }
        resolve();
      })
    }

    next();
  }
}

// Создание функции с задержкой.
const printDelay = createDelayFunction(console.log, {
  delay: 1000,
  delaySinceCompletion: false,
  waitForPrevious: false,
  queueLimit: 3,
});


// Массив с функциями для вывода сообщений с задержкой.
// (закомментированные строки спровоцируют ошибку, т.к. сейчас queueLimit = 3.
const prints = [
  () => printDelay('thank you'),
  () => printDelay('ill say goodbye soon'),
  () => printDelay('though is the end of the world'),
  // () => printDelay('dont blame yourself now'),
  // () => printDelay('and if its true),
  // () => printDelay('i will surround you'),
  // () => printDelay('and give life to a world),
  // () => printDelay('thats our own'),
]

prints.forEach(f => f());
