'use strict';

function sayHi() {
  alert( this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
});

alert( bound.test );
console.log(sayHi);
console.log(bound);