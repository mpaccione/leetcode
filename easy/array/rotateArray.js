//////////////////
// INSTRUCTIONS //
//////////////////

// Given an array, rotate the array to the right by k steps, where k is non-negative.

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const rotateArray = (array, n) => {
  const removedArray = array.splice(array.length - n);
  return removedArray.concat(array);
};

module.exports = function () {
    describe(`Rotate Array - ${k} Spaces`, () => {
        it("Rotation values match", () => {
            const originalLength = nums.length
            rotateArray([...nums], k).forEach((num, index) => {
                if (index < k){
                    expect(num).toEqual(nums[originalLength - (k - index)])
                }
            })
        })
    })
};
