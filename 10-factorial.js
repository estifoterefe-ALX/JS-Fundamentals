const { argv } = require("node:process");

const num1 = parseInt(argv[2]);
let num2 = 1;
function adder(a) {
  for (let i = 1; i <= a; i++) {
    num2 = num2 * i;
  }
}
adder(num1);
console.log(num2);
