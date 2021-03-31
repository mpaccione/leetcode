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

const { toLinkedList, toNumArray, ListNode } = require("./helper.js");

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
  console.log({ l1 });
  console.log({ l2 });

  if (l1 !== null && l2 !== null) {
    const l3 = {
      val: null,
      next: null,
    };

    // Loop over linked list nodes 

    // Value Comparison -> Return Node with value 
    function nodeTraversal(node){

    }

    return l3
  }

  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }

  //

  // const arrayLength1 = nodeArray[0].length;
  // const arrayLength2 = nodeArray[1].length;
  // const longerArray =
  //   arrayLength1 >= arrayLength2 ? nodeArray[0] : nodeArray[1];
  // const shorterArray =
  //   arrayLength1 < arrayLength2 ? nodeArray[0] : nodeArray[1];
  // if (arrayLength1 === 0 || arrayLength2 === 0) {
  //   return longerArray;
  // } else if (arrayLength1 > 0 && arrayLength2 > 0) {
  //   let startIndex = 0;
  //   while (shorterArray.length > 0) {
  //     if (
  //       longerArray[startIndex].val <= shorterArray[0].val &&
  //       longerArray[startIndex + 1].val >= shorterArray[0].val
  //     ) {
  //       // Remove second linked list Head
  //       const nodeToSplice = shorterArray.shift();
  //       // Merge into first linked list
  //       longerArray.splice(startIndex + 1, 0, nodeToSplice);
  //     }
  //     // Set Pointer
  //     console.log(longerArray[startIndex]);
  //     longerArray[startIndex].next = longerArray[startIndex + 1]
  //       ? longerArray[startIndex + 1]
  //       : null;
  //     // Increase Start Index (Efficieny)
  //     startIndex++;
  //   }
  //   // Terminate Tail
  //   longerArray[longerArray.length - 1].next = null;
  //   return longerArray;
  // } else {
  //   return [];
  // }
};

console.log(JSON.stringify(toLinkedList(useCase1[0])));

console.log(
  mergeTwoSortedLists(toLinkedList(useCase1[0]), toLinkedList(useCase1[1]))
);

module.exports = function () {
  describe("Reverse Linked List check", () => {
    it("Use Case 1", () => {
      expect(
        toNumArray(
          mergeTwoSortedLists([
            toLinkedList(useCase1[0]),
            toLinkedList(useCase1[1]),
          ])
        )
      ).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(
        toNumArray(
          mergeTwoSortedLists([
            toLinkedList(useCase2[0]),
            toLinkedList(useCase2[1]),
          ])
        )
      ).toEqual(output2);
    });
    it("Use Case 3", () => {
      expect(
        toNumArray(
          mergeTwoSortedLists([
            toLinkedList(useCase3[0]),
            toLinkedList(useCase3[1]),
          ])
        )
      ).toEqual(output3);
    });
  });
};
