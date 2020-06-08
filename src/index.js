var h1 = document.createElement('h1');
h1.innerHTML = 'Hello, I am Li';
document.body.appendChild(h1);
var obj = { name: 'Lison' };
// console.log(obj.name)
function getKeys(obj) {
    return Object.keys(obj); // 会以列表的形式返回obj中的值
}
console.log(getKeys(obj));
