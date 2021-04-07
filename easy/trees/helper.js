// Format Tree
const toTree = (input) => {
  if (!input || input.length === 0) {
    return input;
  }

  const value = input.shift();
  const rootNode = new TreeNode(value, null, null);

  // Create Nodes Recursively
  (function createTreeNode(node) {
    // Break recursion check
    if (input.length === 0) {
      return;
    }

    // Check for child nodes and NULL handling
    if (node.left !== null && input[0] < node.value) {
      createTreeNode(node.left);
      return;
    } else if (node.right !== null && input[0] > node.value) {
      createTreeNode(node.right);
      return;
    }

    // Get next value in num array
    const newVal = input.shift();
    const newNode = new TreeNode(newVal, null, null);

    // Set child node
    if (newVal > node.value) {
      node.right = newNode;
    } else {
      node.left = newNode;
    }

    // Recursion at root
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
      if (numArray[depth][i] !== null) {
        const { left, right } = numArray[depth][i];
        left === null ? nodeArray.push(null) : nodeArray.push(left);
        right === null ? nodeArray.push(null) : nodeArray.push(right);
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
    recursiveNodesToArrays(++depth);
  })(0);

  // Loop Through Depth Based Node Array For Values
  const newArray = numArray.map((depthArray, i) => {
    return depthArray.map((node) => {
      if (node !== null && node.value !== null && (i <= i * 2 || i === 0)) {
        return node.value;
      }
    });
  });

  return [].concat(...newArray).filter((num) => {
    if (num !== undefined) {
      return num;
    }
  });
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
