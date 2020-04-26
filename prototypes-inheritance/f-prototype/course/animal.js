'use strict';

let animal = {
  eat: true,
};

function Rabbit() {
  this.jump = function(){ 
    alert("Rabbit jump!");
  };
}
console.log(`Rabbit.prototype.constructor === Rabbit: ${Rabbit.prototype.constructor === Rabbit}`)


Rabbit.prototype = animal;
console.log(`Rabbit.prototype.constructor === Rabbit: ${Rabbit.prototype.constructor === Rabbit}`)

let rabbit = new Rabbit();
rabbit.jump();
alert(rabbit.constructor === Rabbit);

