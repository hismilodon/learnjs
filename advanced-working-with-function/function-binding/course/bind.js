let user = {
  firstName: "John"
};

function func(phrase) {
  alert(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user);

user.firstName = "Tom";

funcUser("Hi"); // Hello, John (argument "Hello" is passed, and this=user)