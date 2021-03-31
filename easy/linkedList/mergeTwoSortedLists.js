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

const useCase1 = [
  [1, 2, 4],
  [1, 3, 4],
];
const output1 = [1, 1, 2, 3, 4, 4];

const useCase2 = [[], []];
const output2 = [];

const useCase3 = [[], [0]];
const output3 = [0];

// Format Nodes
const nodes = (input) => {
  const inputNodes = input.map((num, i) => {
    return {
      val: num,
      next: null,
    };
  });

  if (inputNodes.length > 1) {
    for (let i = inputNodes.length - 1; i > 0; i--) {
      inputNodes[i - 1].next = inputNodes[i];
    }
  }

  return inputNodes[0];
};

const mergeTwoSortedLists = (nodeArray) => {
  const arrayLength1 = nodeArray[0].length;
  const arrayLength2 = nodeArray[1].length;
  const longerArray =
    arrayLength1 >= arrayLength2 ? nodeArray[0] : nodeArray[1];
  const shorterArray =
    arrayLength1 < arrayLength2 ? nodeArray[0] : nodeArray[1];

  if (arrayLength1 === 0 || arrayLength2 === 0) {
    return longerArray;
  } else if (arrayLength1 > 0 && arrayLength2 > 0) {
    let startIndex = 0;

    while (shorterArray.length > 0) {
      if (
        longerArray[startIndex].val <= shorterArray[0].val &&
        longerArray[startIndex + 1].val >= shorterArray[0].val
      ) {
        // Remove second linked list Head
        const nodeToSplice = shorterArray.shift();
        // Merge into first linked list
        longerArray.splice(startIndex + 1, 0, nodeToSplice);
      }

      // Set Pointer
      console.log(longerArray[startIndex]);
      longerArray[startIndex].next = longerArray[startIndex + 1]
        ? longerArray[startIndex + 1]
        : null;

      // Increase Start Index (Efficieny)
      startIndex++;
    }

    // Terminate Tail
    longerArray[longerArray.length - 1].next = null;

    return longerArray;
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

console.log(JSON.stringify(nodes(useCase1[0])));

// console.log(
//   output(mergeTwoSortedLists([nodes(useCase1[0]), nodes(useCase1[1])]))
// );

// console.log(
//   mergeTwoSortedLists([
//     nodes(useCase1[0]),
//     nodes(useCase1[1]),
//   ]).forEach((node) => console.log(node.next))
// );

module.exports = function () {
  describe("Reverse Linked List check", () => {
    it("Use Case 1", () => {
      expect(
        output(mergeTwoSortedLists([nodes(useCase1[0]), nodes(useCase1[1])]))
      ).toEqual(output1);
    });
    it("Use Case 2", () => {
      expect(
        output(mergeTwoSortedLists([nodes(useCase2[0]), nodes(useCase2[1])]))
      ).toEqual(output2);
    });
    it("Use Case 3", () => {
      expect(
        output(mergeTwoSortedLists([nodes(useCase3[0]), nodes(useCase3[1])]))
      ).toEqual(output3);
    });
  });
};
