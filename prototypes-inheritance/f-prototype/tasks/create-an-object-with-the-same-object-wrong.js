"use strict";

let base = {};
function FuncWrong() {
  this.name = "Wrong";
}
FuncWrong.prototype = base;

let objWrong = new FuncWrong();
let objWrong2 = new objWrong.constructor();
alert(objWrong2.name);