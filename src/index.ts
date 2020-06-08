
const h1 = document.createElement('h1')
h1.innerHTML = 'Hello, I am Li'
document.body.appendChild(h1)

let obj: object = { name: 'Lison' }
console.log(obj.name)

function getKeys (obj: object) {
  return Object.keys(obj) // 会以列表的形式返回obj中的值
}
console.log(getKeys(obj));
