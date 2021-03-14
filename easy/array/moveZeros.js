//////////////////
// INSTRUCTIONS //
//////////////////

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

const nums = [0, 1, 0, 3, 12];

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeros = (numArr) => {
  const arrLength = numArr.length - 1;

  for (let index = 0; index < arrLength; index++) {
    if (numArr[index] === 0) {
      numArr.push(numArr.splice(index, 1)[0]);
    }
  }
  
  return numArr;
};

module.exports = function () {
  describe("Check for Image Rotation", () => {
    it("Array values match", () => {
      expect(moveZeros(nums)).toEqual(nums.sort().reverse());
    });
  });
};
