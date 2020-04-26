"use strict";

function Func() {
  this.name = "Right";
}

let obj = new Func();
let obj2 = new obj.constructor();
alert(obj2.name);