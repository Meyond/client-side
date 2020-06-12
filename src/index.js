"use strict";
var h1 = document.createElement('h1');
h1.innerHTML = 'Hello, I am Li';
document.body.appendChild(h1);
// ===========================================
var merge = function (arg1, arg2) {
    var res = {};
    res = Object.assign(arg1, arg2);
    return res;
};
var info1 = {
    name: "lison"
};
var info2 = {
    age: 18
};
var lisonInfo = merge(info1, info2);
console.log(lisonInfo.age);
