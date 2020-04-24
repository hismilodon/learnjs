'use strict';

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

//pockets → bed → table → head
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

//benchmark pockets.glasses
function bench(obj) {
  let begin = Date.now();
  for(let i = 0; i<10000000; i++) {
    let tmp = obj.glasses;
  }
  return (Date.now() - begin);
}

let pockets_interval = bench(pockets);
let table_interval = bench(table);
console.log(`Pocket:${pockets_interval}, table:${table_interval}, ${(pockets_interval-table_interval)/(100 * table_interval)}%`);
