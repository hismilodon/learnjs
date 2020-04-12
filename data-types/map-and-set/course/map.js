'use strict';

let map = new Map();
map.set('1', 'Value of string 1');
map.set(1, 'Value of numeric 1');
map['1'] = 'value of index string 1';
map[1] = 'Value of index numeric 1';

alert('map.get(1):' + map.get(1));
alert('map.get(\'1\'):' + map.get('1'));
alert('map[\'1\']):' + map['1']);
alert('map[1]):' + map[1]);

console.log(map);
