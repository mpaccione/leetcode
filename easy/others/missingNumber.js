//////////////////
// INSTRUCTIONS //
//////////////////

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const output = 8;

const getMissingNumber = (nums) => {
  const numsLength = nums.length;
  const intendedSum = (numsLength * (numsLength + 1)) / 2;
  const actualSum = nums.reduce((total, num) => {
    return total + num;
  });

  return intendedSum - actualSum;
};

module.exports = function () {
  describe("Check for Missing Number", () => {
    it("Missing number is correct", () => {
      expect(getMissingNumber(nums)).toEqual(output);
    });
  });
};
