"use strict";

let promise = new Promise((res, rej) => {
  setTimeout( () => rej(new Error("Done!")), 1000);
});

promise
  .then((value) => alert(`Then1: ${value}`), (value) => alert(`Catch1: ${value}`))
  .then((value) => alert(`Then2: ${value}`), (value) => alert(`Catch2: ${value}`))
  .catch((error) => alert(`Catch3: ${error}`))
  .finally( () => alert(`Finally`));
  
  
