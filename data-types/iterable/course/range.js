'use strict';

function Range(from, to) {
  this.current = from;
  this.to = to;

  this[Symbol.iterator] = () => ({
    next: () => {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  });
}

let range = new Range(1, 5);
for (let num of range) {
  alert(num);
}
