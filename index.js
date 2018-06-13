
// Use the Rest Operator
const sum = (function() {
    "use strict";
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(1, 2, 3, 4)); // 10
  console.log(sum(5)); // 5


// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);