//////////////////
// INSTRUCTIONS //
//////////////////

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

const digits = [4, 3, 2, 1];

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

const plusOne = (numArr) => {
  const array = numArr;
  array[array.length - 1]++;
  return array;
};

module.exports = function () {
  describe("Check for Plus One", () => {
    it("Value matches", () => {
      expect(JSON.stringify(plusOne(digits))).toEqual(
        JSON.stringify([4, 3, 2, 2])
      );
    });
  });
};
