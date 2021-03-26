//////////////////
// INSTRUCTIONS //
//////////////////

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

const nums = [1, 4, 2, 1, 2];

// Input: nums = [1,4,2,1,2]
// Output: 4

const singleNumber = (numArr) => {
  let singleNumber;

  for (let i = 0; i < numArr.length; i++) {
    const duplicateIndex = numArr.indexOf(numArr[i], i+1)

    if (duplicateIndex === -1){
        singleNumber = numArr[i];
        break
    }
  }

  return singleNumber;
};

module.exports = function () {
  describe("Check for Single Number", () => {
    it("Value matches", () => {
      expect(singleNumber(nums)).toEqual(4);
    });
  });
};
