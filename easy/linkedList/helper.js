// Format Nodes
const toLinkedList = (input) => {
  const inputNodes = input.map((num) => {
    return new ListNode(num);
  });

  if (inputNodes.length > 1) {
    for (let i = inputNodes.length - 1; i > 0; i--) {
      inputNodes[i - 1].next = inputNodes[i];
    }
  }

  return inputNodes[0];
};

const toNumArray = (linkedList) => {
  if (!linkedList) {
    return [];
  }

  const numArray = [];

  (function recursiveTraversal(node) {
    numArray.push(node.val);

    if (node.next === null) {
      return;
    }

    recursiveTraversal(node.next);
  })(linkedList);

  return numArray;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = {
  toLinkedList,
  toNumArray,
  ListNode,
};
