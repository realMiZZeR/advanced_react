/**
 * Создаёт прокси на объекте, позволяющий создавать вложенные объекты через точку.
 * @param obj Входящий объект.
 * @returns {Proxy}
 */
function createJsonProxy(obj) {

 return new Proxy(obj, {
   get(target, prop, receiver) {
     // Убрал поле toJSON из объекта.
     if (prop === 'toJSON') {
       return undefined;
     }

     // При создании вложенных полей, необходимо обработать ещё не созданные.
     if (typeof target[prop] === 'undefined') {
       target[prop] = new Proxy({}, this);
     }

     return Reflect.get(target, prop, receiver);
   },
 });
}

const jsonProxy = createJsonProxy({ x: 10, });
jsonProxy.a = 1;
jsonProxy.b.c.d = 2;
jsonProxy.b.c = {...jsonProxy.b.c, e: 3};

console.log(JSON.stringify(jsonProxy));