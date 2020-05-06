//mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hi ${this.name}`);
  },

  sayBye() {
    alert(`Bye ${this.name}`);
  },

  age: "I'am mixin",
}

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

let user = new User("Tom");
user.sayHi();
user.sayBye();
alert(`Age is ${user.age}`);