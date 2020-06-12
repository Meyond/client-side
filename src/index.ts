
const h1 = document.createElement('h1');
h1.innerHTML = 'Hello, I am Li';
document.body.appendChild(h1);

// ===========================================

const merge = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U;
  res = Object.assign(arg1, arg2);
  return res;
};

const info1 = { name: [] };
const info2 = { age: 18 };
const lisonInfo = merge(info1, info2);
