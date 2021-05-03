//////////////////
// INSTRUCTIONS //
//////////////////

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Input: root = [1,2,2,null,3,null,3]
// Output: false

const useCase1 = [1, 2, 2, 3, 4, 4, 3];
const output1 = true;

const useCase2 = [1, 2, 2, null, 3, null, 3];
const output2 = false;

// Using numArray because my tree helper function does not support improperly formatted binary trees like leetcode (shame on leetcode)

const isTreeSymmetric = (numArray) => {
  if (!numArray || numArray.length === 0) {
    return false;
  }

  let isValid = true;
  let depth = 0;

  // Loop over array and determine if it is a mirror image or not
  (function recursiveSymmetryCheck(depth) {
    // get length of subset array based on node depth
    const depthLength = depth === 0 ? 1 : depth * 2;
    const subsetArray = numArray.splice(0, depthLength);

    // Get depth array lengths to split and compare
    const totalLength = subsetArray.length;
    const midLength = totalLength / 2;

    // split arrays
    halfOne = subsetArray;
    halfTwo = halfOne.splice(midLength, totalLength);

    // compare arrays
    halfTwo.reverse();
    for (let index = 0; index < halfOne.length; index++) {
      if (halfOne[index] !== halfTwo[index]) {
        isValid = false;
        break;
      }
    }

    // recursion
    if (numArray.length !== 0) {
      recursiveSymmetryCheck(++depth);
    }
  })(depth);

  return isValid;
};

module.exports = function () {
  describe("Is Tree Symmetric", () => {
    it("Use Case 1", () => {
      expect(isTreeSymmetric(useCase1)).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(isTreeSymmetric(useCase2)).toEqual(output2);
    });
  });
};
