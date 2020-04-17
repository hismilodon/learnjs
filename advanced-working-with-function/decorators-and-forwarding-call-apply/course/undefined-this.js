'use strict';

let worker = {
  someMethod: function () {
    return 1;
  },

  slow: function (x) {
    console.log(this);
    alert(`Call by ${x}`);
    return x + this.someMethod();
  },
};

alert(worker.slow(6));
let mySlow = worker.slow;
mySlow(5);
