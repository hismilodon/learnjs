"use strict";

let user = {
  name: 'John',
  brother: {
    name: "Tom",
    age: 25,
    hair: "black",
  },
  sayHi: function() {
    return (`${this.name} say hi!`);
  },
};
user[Symbol('gender')] = 'male';

let descriptors = Object.getOwnPropertyDescriptors(user);
//console.log(typeof descriptors);
console.log(JSON.stringify(descriptors, null, 2));
console.log(descriptors);

let clone = Object.defineProperties({}, descriptors);
//console.log(JSON.stringify(clone, null, 2));
user.brother.name = "Pete";
console.log(JSON.stringify(user, null, 2));
console.log(JSON.stringify(clone, null, 2));