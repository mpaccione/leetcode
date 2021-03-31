//////////////////
// INSTRUCTIONS //
//////////////////

// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { toLinkedList, toNumArray } = require("./helper.js");

const useCase1 = [4, 5, 1, 9];
const nodeVal = 5;

const deleteNode = (l1, deleteVal) => {
  const l2 = JSON.parse(JSON.stringify(l1))

  function recursiveDelete(node) {
    if (node.next === null) {
      return
    }

    if (node.next.val === deleteVal) {
      node.next = node.next.next; // Skip Node in Pointers
    }
    recursiveDelete(node.next);
  };

  recursiveDelete(l2)
  return l2;
};

module.exports = function () {
  describe("Delete Node check", () => {
    it("Use Case 1", () => {
      expect(toNumArray(deleteNode(toLinkedList(useCase1), nodeVal))).toEqual([4, 1, 9]);
    });
  });
};
