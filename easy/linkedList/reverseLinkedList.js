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

const { toLinkedList, toNumArray, ListNode } = require("./helper.js");

const useCase1 = [1, 2, 3, 4, 5];
const output1 = [5, 4, 3, 2, 1];

const useCase2 = [1, 2];
const output2 = [2, 1];

const useCase3 = [];
const output3 = [];

const reverseList = (linkedList) => {
  if (!linkedList){
    return linkedList
  }

  let l2 = JSON.parse(JSON.stringify(linkedList));
  let nextNode = null;
  let currentNode = null;
  let prevNode = null;

  function recursiveReversion(node) {
    if (node === null) {
      return
    }

    // Set Variables Pointers
    prevNode = currentNode;
    currentNode = node;
    nextNode = node.next

    // List Pointer Reversal
    if (currentNode !== undefined) {
      currentNode.next = prevNode;
    }

    recursiveReversion(nextNode);
  }

  recursiveReversion(l2)
  return currentNode;
};


module.exports = function () {
  describe("Reverse Linked List check", () => {
    it("Use Case 1", () => {
      expect(toNumArray(reverseList(toLinkedList(useCase1)))).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(toNumArray(reverseList(toLinkedList(useCase2)))).toEqual(output2);
    });
    it("Use Case 3", () => {
      expect(toNumArray(reverseList(toLinkedList(useCase3)))).toEqual(output3);
    });
  });
};
