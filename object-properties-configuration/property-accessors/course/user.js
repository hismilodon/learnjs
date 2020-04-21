"use strict"

let user = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(' ');
  },
  configurable: false,
  enumerable: true,
});

let descs = Object.getOwnPropertyDescriptors(user);
console.log(descs);