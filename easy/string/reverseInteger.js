//////////////////
// INSTRUCTIONS //
//////////////////

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

// Input: x = 0
// Output: 0

const input1 = 123;
const input2 = -123;
const input3 = 120;
const input4 = 0;

const reverseInteger = (num) => {
  const reversed = parseInt(num.toString().split("").reverse().join(""));
  return reversed >= -Math.pow(2, 31) && reversed <= Math.pow(2, 31) - 1
    ? num >= 0
      ? reversed
      : -reversed
    : 0;
};

module.exports = function () {
  describe("Check for Reversal", () => {
    it("Use Case 1", () => {
      expect(reverseInteger(input1)).toEqual(321);
    });
    it("Use Case 2", () => {
      expect(reverseInteger(input2)).toEqual(-321);
    });
    it("Use Case 3", () => {
      expect(reverseInteger(input3)).toEqual(21);
    });
    it("Use Case 4", () => {
      expect(reverseInteger(input4)).toEqual(0);
    });
  });
};
