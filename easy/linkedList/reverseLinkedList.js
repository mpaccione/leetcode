//////////////////
// INSTRUCTIONS //
//////////////////

// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Use Case 1
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Use Case 2
// Input: head = [1,2]
// Output: [2,1]

// Use Case 3
// Input: head = []
// Output: []

const useCase1 = [1, 2, 3, 4, 5];
const output1 = [5, 4, 3, 2, 1];

const useCase2 = [1, 2];
const output2 = [2, 1];

const useCase3 = [];
const output3 = [];

// Format Nodes
const nodes = (input) => {
  return input.map((num, i) => {
    return {
      val: num,
      next: input[i + 1] ? input[i + 1] : null,
    };
  });
};

const reverseList = (nodeArray) => {
  const arrayLength = nodeArray.length - 1;

  if (arrayLength + 1 > 0) {
    // Make Head the Tail
    nodeArray[0].next = null
 
    for (let i = arrayLength; i > 1; i--) {
      nodeArray[i].next = nodeArray[i - 1].val
    }

    return nodeArray.reverse();
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
  describe("Reverse Linked List check", () => {
    it("Use Case 1", () => {
      expect(output(reverseList(nodes(useCase1)))).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(output(reverseList(nodes(useCase2)))).toEqual(output2);
    });
    it("Use Case 3", () => {
      expect(output(reverseList(nodes(useCase3)))).toEqual(output3);
    });
  });
};
