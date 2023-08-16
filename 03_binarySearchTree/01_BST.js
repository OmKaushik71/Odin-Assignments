class Node {
  constructor (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor (array) {
    this.root = this.buildTree(array);
  }

  #sortAndRemoveDup (array) {
    return [...new Set(array)].sort((a, b) => a - b);
  }

  #minValue (root) {
    let minv = root.data;
    while (root.left != null) {
      minv = root.left.data;
      root = root.left;
    }
    return minv;
  }

  buildTree (array) {
    const sorted = this.#sortAndRemoveDup(array);
    if (sorted.length === 0) return null;
    const mid = Math.floor(sorted.length / 2);
    const root = new Node(sorted[mid], this.buildTree(sorted.slice(0, mid)), this.buildTree(sorted.slice(mid + 1)));
    // Since it is a recursive function, it must return some value to the calling function.
    return root;
  }

  insert (key, root = this.root) {
    if (root == null) return new Node(key);
    if (key > root.data) {
      root.right = this.insert(key, root.right);
    } else {
      root.left = this.insert(key, root.left);
    }
    return root;
  }

  delete (key, root = this.root) {
    if (key) {
      if (root == null) return root;
      if (root.data > key) root.left = this.delete(key, root.left);
      else if (root.data < key) root.right = this.delete(key, root.right);
      else {
        if (root.left == null) return root.right;
        else if (root.right == null) return root.left;
        root.data = this.#minValue(root.right);
        root.right = this.delete(root.data, root.right);
      }
      return root;
    }
  }

  find (key, root = this.root) {
    if (root == null) return root;
    const node = root;
    if (root.data != key) {
      return root.data > key ? this.find(key, root.left) : this.find(key, root.right);
    }
    return node;
  }

  levelOrder (callback) {
    if (!this.root) return [];
    const queue = [this.root];
    const results = [];
    while (queue.length) {
      const level = [];
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        level.push(node.key);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        if (callback) callback(node);
      }
      results.push(level);
    }
    if (!callback) return results;
  }

  preorder (callback) {
    if (!this.root) return [];
    const stack = [this.root];
    const results = [];
    while (stack.length) {
      const node = stack.pop();
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      if (callback) callback(node);
      results.push(node.key);
    }
    if (!callback) return results;
  }

  inorder (node = this.root, callback, result = []) {
    if (!this.root) return [];
    if (node === null) return;
    this.inorder(node.left, callback, result);
    callback ? callback(node) : result.push(node.key);
    this.inorder(node.right, callback, result);
    if (result) return result;
  }

  postorder (callback) {
    if (!this.root) return [];
    const stack = [this.root];
    const results = [];
    while (stack.length) {
      const node = stack.pop();
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      if (callback) callback(node);
      results.push(node.key);
    }
    if (!callback) return results.reverse();
  }

  height (node = this.root) {
    if (node === null) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth (node, root = this.root, level = 0) {
    if (!node) return null;
    if (root === null) return 0;
    if (root.key === node.key) return level;
    const count = this.depth(node, root.left, level + 1);
    if (count !== 0) return count;
    return this.depth(node, root.right, level + 1);
  }

  isBalanced (node = this.root) {
    if (node === null) return true;
    const heightDiff = Math.abs(
      this.height(node.left) - this.height(node.right)
    );
    return (
      heightDiff <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    );
  }
}

const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};
const myTree = new Tree(randomArray(10));
console.log('Balanced:', myTree.isBalanced());
console.log('Lever Order =>', myTree.levelOrder());
console.log('Preorder =>', myTree.preorder());
console.log('Inorder =>', myTree.inorder());
console.log('Postorder =>', myTree.postorder());
prettyPrint(myTree.root);
// Function to print visual representation of the tree
function prettyPrint (node, prefix = '', isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
