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

const { toLinkedList, toNumArray } = require("./helper.js");

const removeNodeFromTail = (linkedList, indexFromTail) => {
  let l2 = JSON.parse(JSON.stringify(linkedList));
  let length = 1;
  let count = 1;

  // Get Total Length
  (function recursiveTraversal(node) {
    if (node === null || node.next === null) {
      return;
    }

    length++;
    recursiveTraversal(node.next);
  })(linkedList);

  // Delete Nth Node
  function recursiveDelete(node) {
    if (node === null || (node.next === null && count === 1)) {
      l2 = false;
      return;
    }

    if (count === length - indexFromTail) {
      node.next = node.next.next ? node.next.next : null; // Skip Node in Pointers
    }

    count++;
    if (node.next !== null) {
      recursiveDelete(node.next);
    } else {
      return;
    }
  }

  recursiveDelete(l2);
  return l2;
};

module.exports = function () {
  describe("Remove Nth Node from Tail", () => {
    it("Use Case 1", () => {
      expect(
        toNumArray(removeNodeFromTail(toLinkedList(useCase1), n1))
      ).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(
        toNumArray(removeNodeFromTail(toLinkedList(useCase2), n2))
      ).toEqual(output2);
    });
    it("Use Case 3", () => {
      expect(
        toNumArray(removeNodeFromTail(toLinkedList(useCase3), n3))
      ).toEqual(output3);
    });
  });
};
