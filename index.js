"use strict";
const inputJson1 = require('./mocks/datamodel_1.json'),
      inputJson2 = require('./mocks/datamodel_2.json'),
      sort = require('./src/sorting');
 
console.time();
const value = sort(inputJson2);
console.log(value);
console.timeEnd();
