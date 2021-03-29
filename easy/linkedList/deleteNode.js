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

const input = [4, 5, 1, 9];
const node = 5;
let nodes = undefined;

// Format Nodes
nodes = input.map((num, i) => {
  return {
    val: num,
    next: input[i + 1] ? input[i + 1] : null,
  };
});

const deleteNode = (nodeArray, nodeValue) => {
  const startIndex = nodeArray.findIndex((node) => node.val === nodeValue);
  const arrayLength = nodeArray.length;

  if (startIndex) {
    // Delete Node
    nodeArray.splice(startIndex, 1);

    // Link Prior Node to next node.
    nodeArray[startIndex - 1].next = nodeArray[startIndex].val;

    // Loop through all nodes and change links
    for (let i = startIndex; i < arrayLength - 1; i++) {
      nodeArray[i].next = nodeArray[i + 1] ? nodeArray[i + 1].val : null;
    }

    return nodeArray;
  } else {
    return startIndex;
  }
};

const output = (arr) => {
  return arr.map((node) => {
    if (node) {
      return node.val;
    }
  });
};

module.exports = function () {
  describe("Delete Node check", () => {
    it("Use Case 1", () => {
      expect(output(deleteNode(nodes, node))).toEqual([4, 1, 9]);
    });
  });
};
