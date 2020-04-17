"use strict";
let obj = {
  leader: 'Tom',
  f: function(x) {
    alert(`${this.leader} ${x}`);
  },
};

// create wrappers
obj.f = delay(obj.f, 1000);
//let f1500 = delay(obj.f, 1500);

obj.f("test"); // shows "test" after 1000ms
//f1500("test"); // shows "test" after 1500ms

function delay(func, delay) {
  return function (...args) {
    const saveThis = this;
    setTimeout(function () { func.apply(saveThis, args) }, delay);
  }
}