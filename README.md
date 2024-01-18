**Урок №2. Дескрипторы свойств объектов**

<p>
Напишите proxy-обертку для объекта, которая умеет достраивать недостающие промежуточные вложенные узлы в объекте.<br />
Сделайте так, чтобы этот proxy-объект корректно конвертировался в JSON формат, при помощи метода JSON.stringify.<br />
</p>

<p>
Должно работать так:
</p>

```js
const ProxiedObject = yourUtility({ x: 10 })

ProxiedObject.a = 1
// ProxiedObject: { a: 1, x: 10 }

ProxiedObject.b.c.d = 2
// ProxiedObject: { a: 1, b: { c: { d: 2 } }, x: 10 }

console.log(JSON.stringify(ProxiedObject))
// out: {"a":1,"b":{"c":{"d":2}},"x":10}
```
