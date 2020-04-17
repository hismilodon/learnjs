"use strict";

let worker = {
  base: 10,
  slow(min, max) {
    alert(`Call with ${min} and ${max}`);
    return +this.base + min + max; // scary CPU-hogger is assumed
  }
};

alert(`Original time: ${worker.slow(1, 2)}`);

// should remember same-argument calls
worker.slow = cachingDecorator(worker.slow);

function cachingDecorator(func) {
  const cache = new Map();
  return function (...args) {
    console.log(args);
    const key = args.join('-');
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = func.call(this, ...args);
      cache.set(key, result);
      return result;
    }
  };
}

alert(`First time: ${worker.slow(1, 2)}`);
alert(`Second time: ${worker.slow(1, 2)}`);
