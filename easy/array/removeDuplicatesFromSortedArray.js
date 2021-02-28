//////////////////
// INSTRUCTIONS //
//////////////////

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const _ = require("underscore")

const randomArray = Array.from({ length: 1000 }, () =>
  Math.round(Math.random() * 6 + 1)
).sort(); // Fills 1 - 6

// console.log({ randomArray });

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.

const removeDuplicates = (array) => {
  return array.filter((num, index) => {
    if (array.indexOf(num) === index) {
      return num;
    }
  });
};

module.exports = function () {

  describe("Remove Duplicates from Sorted Array", () => {
    it("Array only contains integers", () => {
      removeDuplicates(randomArray).forEach((item) => {
        expect(typeof item).toEqual("number");
      });
    });

    it("Array only contains uniques", () => {
      const array = removeDuplicates(randomArray);
      expect(_.uniq(array).length).toEqual(array.length);
    });
  });
};
