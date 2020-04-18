'use strict';

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}`);
  },
};

user.sayHi = user.sayHi.bind()

setTimeout(user.sayHi, 1000);
user.firstName = 'Jack';
user = {
  sayHi() { alert("Another user in setTimeout!"); },
};