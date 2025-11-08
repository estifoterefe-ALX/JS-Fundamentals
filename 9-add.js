const { argv } = require("node:process");

const num1 = parseInt(argv[2]);
const num2 = parseInt(argv[3]);
function adder(a, b) {
  console.log(a + b);
}
adder(num1, num2);
