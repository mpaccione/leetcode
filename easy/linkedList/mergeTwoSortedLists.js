//////////////////
// INSTRUCTIONS //
//////////////////

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Use Case 1
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Use Case 2
// Input: l1 = [], l2 = []
// Output: []

// Use Case 3
// Input: l1 = [], l2 = [0]
// Output: [0]

const { toLinkedList, toNumArray } = require("./helper.js");

const useCase1 = [
  [1, 2, 4],
  [1, 3, 4],
];
const output1 = [1, 1, 2, 3, 4, 4];

const useCase2 = [[], []];
const output2 = [];

const useCase3 = [[], [0]];
const output3 = [0];

const mergeTwoSortedLists = (l1, l2) => {
  if (l1 === null || l1 === undefined) {
    return l2;
  } else if (l2 === null || l2 === undefined) {
    return l1;
  }

  // Start At Head
  let l1Node;
  let l2Node;
  let l3;

  // Determine List to Start
  if (l1.val >= l2.val) {
    l3 = { val: l1.val, next: undefined };
    l1Node = l1.next;
    l2Node = l2;
  } else {
    l3 = { val: l2.val, next: undefined };
    l1Node = l1;
    l2Node = l2.next;
  }

  // Traversal and Merge
  (function mergeTraversal(l1Node, l2Node, l3Node) {
   
    // Tail Check
    if (l1Node === null){
      l3Node.next = l2Node;
      return
    } else if (l2Node === null){
      l3Node.next = l1Node;
      return
    } else if (!l1Node && !l2Node) {
      return;
    }

    // Compare Values
    if (l1Node.val > l3Node.val && l1Node.val < l2Node.val) {
      // Up One L1 Node
      l3Node.next = l1Node;
      mergeTraversal(l1Node.next, l2Node, l3Node.next);
    } else {
      // Up One L2 Node
      l3Node.next = l2Node;
      mergeTraversal(l1Node, l2Node.next, l3Node.next);
    }

  })(l1Node, l2Node, l3);

  return l3;
};

module.exports = function () {
  describe("Merge Two Sorted Linked Lists", () => {
    it("Use Case 1", () => {
      expect(
        toNumArray(
          mergeTwoSortedLists(
            toLinkedList(useCase1[0]),
            toLinkedList(useCase1[1]),
          )
        )
      ).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(
        toNumArray(
          mergeTwoSortedLists(
            toLinkedList(useCase2[0]),
            toLinkedList(useCase2[1]),
          )
        )
      ).toEqual(output2);
    });
    it("Use Case 3", () => {
      expect(
        toNumArray(
          mergeTwoSortedLists(
            toLinkedList(useCase3[0]),
            toLinkedList(useCase3[1]),
          )
        )
      ).toEqual(output3);
    });
  });
};
