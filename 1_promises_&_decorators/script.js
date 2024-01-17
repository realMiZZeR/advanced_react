function wait(time = 1000) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function print(message) {
  console.log(message);
}

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

    console.log(delay);

    setTimeout(() => {
      isRunning = false;
      next();
    }, delay);
  }

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

const printDelay = createDelayFunction(print, {
  delay: 1000,
  delaySinceCompletion: false,
  waitForPrevious: false,
  queueLimit: 3,
});


const prints = [
  () => printDelay('thank you'),
  () => printDelay('ill say goodbye soon'),
  () => printDelay('though is the end of the world'),
  // () => printDelay('dont blame yourself now'),
  // () => printDelay('and if its true),
  // () => printDelay('i will surround you'),
  // () => printDelay('at the end of the world'),
  // () => printDelay('thats our own'),
]

prints.forEach(f => f());

// Promise.race([
//   printDelay('hello'),
//   printDelay('hello'),
//   printDelay('hello'),
//   printDelay('hello'),
//   printDelay('hello'),
// ]).catch(err => console.error(err));
