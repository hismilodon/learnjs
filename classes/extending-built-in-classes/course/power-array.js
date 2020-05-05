'use strict';

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10 , 50);
alert(arr.isEmpty());

let filterArr = arr.filter( item => item >= 10);
alert(filterArr.isEmpty());