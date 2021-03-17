//////////////////
// INSTRUCTIONS //
//////////////////

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

const n = 15;
const result = [
  "1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz",
];

const fizzBuzz = (n) => {
  const array = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 == 0 && i % 5 == 0:
        array.push("FizzBuzz");
        break;
      case i % 3 === 0:
        array.push("Fizz");
        break;
      case i % 5 === 0:
        array.push("Buzz");
        break;
      default:
        array.push(i.toString());
    }
  }
  return array;
};

module.exports = function () {
  describe("Check for FizzBuzz Result", () => {
    it("FizzBuzz matches", () => {
      expect(fizzBuzz(n)).toEqual(result);
    });
  });
};
