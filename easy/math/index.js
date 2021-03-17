const fizzBuzz = require("./fizzBuzz.js");
const countPrimes = require("./countPrimes")

// Math
fizzBuzz();
countPrimes();

module.exports = function () {
  fizzBuzz();
  countPrimes();
};
