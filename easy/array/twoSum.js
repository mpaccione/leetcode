//////////////////
// INSTRUCTIONS //
//////////////////

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const nums = [2,7,11,15];
const target = 18;

// Input: nums = [2,7,11,15], target = 18
// Output: [1,2]
// Output: Because nums[1] + nums[2] == 18, we return [1, 2].

const twoSum = (numArr) => {
  let indexArr;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < target){
        const secondNum = target - numArr[i];
        const secondNumIndex = numArr.indexOf(secondNum)
        
        if (secondNumIndex !== -1){
            indexArr = [i, secondNumIndex]
            break;
        }
    }
  }
  
  return indexArr;
};

module.exports = function () {
  describe("Check for Two Sum", () => {
    it("Array values match", () => {
      expect(twoSum(nums)).toEqual([1,2]);
    });
  });
};
