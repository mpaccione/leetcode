//////////////////
// INSTRUCTIONS //
//////////////////

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

const nums1 = [1, 2, 3];
// const m = 3;
const nums2 = [2, 5, 6];
// const n = 3;

const mergeArray = (nums1, nums2) => {
  let start_idx = 0;
  for (let num of nums2) {
    for (let idx = start_idx; idx < nums1.length; idx++){
      if (num <= nums1[idx]) {
        nums1.splice(idx, 0, num);
        start_idx = idx;
        break;
      }
      if (idx == nums1.length - 1){
        nums1.push(num);
        start_idx = idx;
        break;
      }
    }    
  }
  return nums1;
};

module.exports = function () {
  describe("Check for Sorted Merge", () => {
    it("Array values are merged and sorted", () => {
      expect(nums1.concat(nums2).sort()).toEqual(mergeArray(nums1, nums2));
    });
  });
};
