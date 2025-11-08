const { argv } = require("node:process");
const display = parseInt(argv[2])
  ? `My number:${parseInt(argv[2])}`
  : "Not a number";
console.log(display);
