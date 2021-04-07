//////////////////
// INSTRUCTIONS //
//////////////////

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]
// Output: 2

// Input: root = []
// Output: 0

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 **/

const { toTree } = require("./helper.js");

const useCase1 = [3, 9, 20, 2, 5, 15, 7];
const output1 = 3;

const useCase2 = [1, 3, 2];
const output2 = 2;

const useCase3 = [];
const output3 = 0;

const depthBinaryTree = (tree) => {
  if (!tree || tree.length === 0) {
    return 0;
  }

  const numArray = [[tree]];
  let depth = 0;

  // Convert Binary Tree to Depth Based Node Array
  (function recursiveNodesToArrays(d) {
    const nodeArray = [];
    let terminalNodes = 0;

    // Determine if at final depth by checking if node array is all nulls
    for (let i = 0; i < numArray[d].length; i++) {
      if (numArray[d][i] !== null) {
        const { left, right } = numArray[d][i];
        left === null ? nodeArray.push(null) : nodeArray.push(left);
        right === null ? nodeArray.push(null) : nodeArray.push(right);
      } else {
        terminalNodes++;
      }
    }

    // If all nodes are undefined stop
    if (terminalNodes === numArray[d].length) {
      // Appear to be one high so we minus one
      depth = --d;
      return;
    }

    numArray.push(nodeArray);

    // Recursion
    recursiveNodesToArrays(++d);
  })(depth);

  return depth;
};

module.exports = function () {
  describe("Depth of Binary Tree Check", () => {
    it("Use Case 1", () => {
      expect(depthBinaryTree(toTree(useCase1))).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(depthBinaryTree(toTree(useCase2))).toEqual(output2);
    });
    it("Use Case 3", () => {
      expect(depthBinaryTree(toTree(useCase3))).toEqual(output3);
    });
  });
};
