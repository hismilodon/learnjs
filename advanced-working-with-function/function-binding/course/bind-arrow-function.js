'use strict';

let user = {
  name: 'John',
  sayHi: function(){
    let arrow = () => alert(this.name);
    arrow();
  },
};

user.sayHello = function() {
  this.sayHi();
};

user.sayHello();