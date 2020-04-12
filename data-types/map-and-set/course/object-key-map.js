"use strict";

let john = { name: 'John', age: 31 };
let tom = { name: 'Tom', age: 25 };
let peter = { name: 'Peter' }

let visitsCountMap = new Map();

visitsCountMap.set(john, 20);
visitsCountMap.set(tom, 30);

//alert(`${john.name} visits ${visitsCountMap.get(john)} times`);
//alert(`${tom.name} visits ${visitsCountMap.get(tom)} times`);

let jack = john;
//alert(`jack visits ${visitsCountMap.get(jack)} times`);
//alert(`${peter.name} visits ${visitsCountMap.get(peter)} times`);

console.log(Object.entries(visitsCountMap));
console.log(visitsCountMap.entries());
let obj = Object.fromEntries(visitsCountMap.entries());
console.log(obj);

for (let item of visitsCountMap) {
  //alert(item);
}

for (let key of visitsCountMap.keys()) {
  //console.log(key);
}

for (let value of visitsCountMap.values()) {
  //console.log(value);
}
