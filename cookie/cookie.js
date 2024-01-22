const getProxiedCookie = () => {

  const cookie = document.cookie
    .split(';')
    .reduce((acc, value) => ({
      ...acc,
      [value.substring(0, value.indexOf('='))]: value.substring(value.indexOf('=' + 1)).trim()
    }), {});

  const setCookie = (key, value) => {
    document.cookie = `${key}=${value}`;
  }

  const deleteCookie = name => document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;

  return new Proxy(cookie, {
    set(target, p, newValue, receiver) {
      setCookie(p, newValue);
      return Reflect.set(target, p, newValue, receiver);
    },
    deleteProperty(target, p) {
      deleteCookie(p);
      Reflect.deleteProperty(...arguments);
    }
  })

}

const cookie = getProxiedCookie();
cookie.a = 10;
cookie.b = 20;

console.log(document.cookie);
console.log(cookie);

delete cookie.a;

console.log(document.cookie);
console.log(cookie);