//////////////////
// INSTRUCTIONS //
//////////////////

// Given the head of a singly linked list, return true if it is a palindrome.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Use Case 1
// Input: head = [1,2,2,1]
// Output: true

// Use Case 2
// Input: head = [1,2]
// Output: false

/*
Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
*/

const { toLinkedList, toNumArray } = require("./helper.js");

const useCase1 = [1, 2, 2, 1];
const output1 = true;

const useCase2 = [1, 2];
const output2 = false;

const isListPalindrome = (list) => {
  if (list === null || list === undefined) {
    return false;
  }

  let listLength = 0;
  // Find length of Linked List
  (function getLength(list) {
    if (list !== null) {
      listLength++;
      getLength(list.next);
    }
  })(list);

  // Return false if odd length
  if (listLength % 2 !== 0) {
    return false;
  }

  let secondNode;
  let midPoint = listLength / 2;
  let counter = 0;
  // Set pointer for mid list
  (function setPointer(list) {
    if (counter === midPoint) {
      secondNode = list;
      return;
    }

    counter++;
    setPointer(list.next);
  })(list);

  let duplicateList = JSON.parse(JSON.stringify(secondNode));
  let prevNode = null;
  let currentNode = null;
  let nextNode = null;
  // Create reversed copy to diff against
  (function reverseList(node) {
    if (node === null) {
      return;
    }

    // Set Variables Pointers
    prevNode = currentNode;
    currentNode = node;
    nextNode = node.next;

    // List Pointer Reversal
    if (currentNode !== undefined) {
      currentNode.next = prevNode;
    }

    reverseList(nextNode);
  })(duplicateList);

  // Compare values
  let isPalindrome;
  (function diffNodes(list, secondNode) {
    if (secondNode !== null && list.val !== secondNode.val) {
      isPalindrome = false;
      return;
    } else if (secondNode === null) {
      isPalindrome = true;
      return;
    }

    diffNodes(list.next, secondNode.next);
  })(list, currentNode);

  return isPalindrome;
};

module.exports = function () {
  describe("Is LinkedList a Palindrome", () => {
    it("Use Case 1", () => {
      expect(isListPalindrome(toLinkedList(useCase1))).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(isListPalindrome(toLinkedList(useCase2))).toEqual(output2);
    });
  });
};
