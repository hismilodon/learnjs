'use strict'
function f() {
  alert(this); // null
}
let jack = [1,2,3];
let user = {
  g: f.bind(null)
};

user.g();