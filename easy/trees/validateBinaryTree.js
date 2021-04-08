//////////////////
// INSTRUCTIONS //
//////////////////

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 **/

// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

const useCase1 = [2, 1, 3];
const output1 = true;

const useCase2 = [5, 1, 4, null, null, 3, 6];
const output2 = false;

const validateBinaryTree = (numArray) => {
  if (!numArray || numArray.length === 0) {
    return false;
  }

  let isValid = true;

  // Check values recursively
  (function recursiveValidation(nodeVal) {
    const childNodes = numArray.splice(0, 2);

    if (
      (childNodes[0] > nodeVal && childNodes[0] !== null) ||
      childNodes[1] < nodeVal
    ) {
      isValid = false;
      return;
    }

    // Recursion
    if (numArray.length === 0) {
      return;
    }
    recursiveValidation(numArray.shift());
  })(numArray.shift());

  return isValid;
};

module.exports = function () {
  describe("Validate Binary Tree", () => {
    it("Use Case 1", () => {
      expect(validateBinaryTree(useCase1)).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(validateBinaryTree(useCase2)).toEqual(output2);
    });
  });
};
