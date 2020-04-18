'use strict';

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};
user.loginOk = user.loginOk.bind(user);
user.loginFail = user.loginFail.bind(user);

askPassword(user.loginOk, user.loginFail);