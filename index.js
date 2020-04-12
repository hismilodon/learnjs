"use strict";

const newLocal = [1, 2, 3, 5, 8, 9];
let arr = newLocal;
for (let item of arr) {
    alert(item);
}
alert("Total:" + arr.reduce(prev, item => prev + item), 0);