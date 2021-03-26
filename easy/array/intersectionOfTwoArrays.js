//////////////////
// INSTRUCTIONS //
//////////////////

// Given two integer arrays nums1 and nums2, return an array of their intersection.

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersectionOfTwoArrays = (nums1, nums2) => {
  let intersectionArray = [];

  nums1.forEach((num) => {
      const matchIndex = nums2.indexOf(num); 
      if (matchIndex !== -1){
        intersectionArray.push(num)
      }
  })

  return intersectionArray;
};

module.exports = function () {
  describe("Check for Intersection of Arrays", () => {
    it("Array values match", () => {
      expect(intersectionOfTwoArrays(nums1, nums2)).toEqual([4,9]);
    });
  });
};
