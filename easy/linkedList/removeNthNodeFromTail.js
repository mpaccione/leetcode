//////////////////
// INSTRUCTIONS //
//////////////////

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Use Case 1
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Use Case 2
// Input: head = [1], n = 1
// Output: []

// Use Case 3
// Input: head = [1,2], n = 1
// Output: [1]

const useCase1 = [1, 2, 3, 4, 5];
const n1 = 2;
const output1 = [1, 2, 3, 5];

const useCase2 = [1];
const n2 = 1;
const output2 = [];

const useCase3 = [1, 2];
const n3 = 1;
const output3 = [1];

// Format Nodes
const nodes = (input) => {
  return input.map((num, i) => {
    return {
      val: num,
      next: input[i + 1] ? input[i + 1] : null,
    };
  });
};

const removeNodeFromTail = (nodeArray, indexFromTail) => {
  const arrayLength = nodeArray.length;
  const startIndex = arrayLength - indexFromTail;

  if (startIndex) {
    // Delete Node
    nodeArray.splice(startIndex, 1);

    // Link Prior Node to next node.
    if (arrayLength > 1) {
      nodeArray[startIndex - 1].next = nodeArray[startIndex] ? nodeArray[startIndex].val : null;

      // Loop through all nodes and change links
      for (let i = startIndex; i < arrayLength - 1; i++) {
        nodeArray[i].next = nodeArray[i + 1] ? nodeArray[i + 1].val : null;
      }
    }

    return nodeArray;
  } else {
    return [];
  }
};

const output = (arr) => {
  if (!arr) {
    return arr;
  }

  return arr.map((node) => {
    if (node) {
      return node.val;
    }
  });
};

module.exports = function () {
  describe("Delete Node check", () => {
    it("Use Case 1", () => {
      expect(output(removeNodeFromTail(nodes(useCase1), n1))).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(output(removeNodeFromTail(nodes(useCase2), n2))).toEqual(output2);
    });
    it("Use Case 3", () => {
      expect(output(removeNodeFromTail(nodes(useCase3), n3))).toEqual(output3);
    });
  });
};
