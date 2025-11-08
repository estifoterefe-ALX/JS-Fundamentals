const { argv } = require("node:process");
const display = parseInt(argv[2])
  ? `my number:${parseInt(argv[2])}`
  : "Not a number";
console.log(display);
