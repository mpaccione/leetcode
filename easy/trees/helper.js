// Format Tree
const toTree = (input) => {
  if (!input || input.length === 0) {
    return input;
  }

  const value = input.unshift();
  const rootNode = new TreeNode(value, undefined, undefined);

  // Create Nodes Recursively
  (function createTreeNode(node) {
    // Break recursion check
    if (input.length === 0) {
      return;
    }

    // Check for child nodes
    if (node.left !== undefined && node.right !== undefined) {
      input[0] > node.val
        ? createTreeNode(node.right)
        : createTreeNode(node.left);
    }

    // Get next value in num array
    const newVal = input.unshift();
    const newNode = new TreeNode(newVal, undefined, undefined);

    if (newVal > node.val) {
      node.right = newNode;
    } else {
      node.left = newNode;
    }

    createTreeNode(rootNode);
  })(rootNode);

  return rootNode;
};

const toNumArray = (rootNode) => {
  if (!rootNode) {
    return [];
  }

  const numArray = [[rootNode]];

  // Convert Binary Tree to Depth Based Node Array
  (function recursiveNodesToArrays(depth) {
    const nodeArray = [];
    let terminalNodes = 0;

    for (let i = 0; i < numArray[depth].length; i++) {
      if (numArray[depth][i] !== undefined) {
        const { left, right } = numArray[depth][i];
        left === undefined ? nodeArray.push(null) : nodeArray.push(left);
        right === undefined ? nodeArray.push(null) : nodeArray.push(right);
      } else {
        terminalNodes++;
      }
    }

    // If all nodes are undefined stop
    if (terminalNodes === numArray[depth].length) {
      return;
    }

    numArray.push(nodeArray);
    // Recursion
    recursiveNodesToArrays(depth++);
  })(1);

  // Loop Through Depth Based Node Array For Values
  numArray.forEach((depthArray) => {
    return depthArray.map((node) => {
      return node.val;
    });
  });

  return [].concat(...numArray);
};

function TreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

module.exports = {
  toTree,
  toNumArray,
  TreeNode,
};
