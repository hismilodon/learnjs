"use strict";

function f(a) {
  console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored
function throttle(func, ms) {
  let coolDown = true;
  let [savedArgs,savedThis] = [null, null];

  return function wrapper(...args) {
    if (coolDown) {
      func.call(this, ...args);
      coolDown = false;
    } else {
      [savedThis,savedArgs] = [this, args];
      return;
    }

    setTimeout(() => {
      coolDown = true;
      if (savedArgs) {
        wrapper.call(savedThis, ...savedArgs);
        [savedArgs, savedThis] = [null, null];
      }
    }, ms);
  }
}