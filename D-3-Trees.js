//Abstract Syntax Tree (AST)
//Perfect Binary Tree - Perfect
//Full Binary Tree - Each Node 0 or 2 NOT 1
//Half of our nodes is in the bottom!
// Divide and conquer

//#nodes = 2^levels-1

//lookup O(logN)
//insert O(logN)
//delete O(logN)

// balanced vs UnBalanced
// Balance algorithms: AVL Trees, Red Black Trees

//Binary Heaps - Max Heap, Min Heap = PRIORITY QUEUES
//lookup O(n)
//insert O(log n)
//delete O(log n)

//Trie - A BST-like structure for letters (26 in the first level!)

class NodeTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new NodeTree(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (newNode.value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
  }
  // remove
}

// const tree = new BinarySearchTree();
// tree.insert(9);
// console.log(JSON.stringify(traverse(tree.root)));
// tree.insert(4);
// console.log(JSON.stringify(traverse(tree.root)));
// tree.insert(6);
// tree.insert(20);
// console.log(JSON.stringify(traverse(tree.root)));
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(9))
// console.log(tree.lookup(1500))

//     9
//  4     20
//1  6  15  170

class BasriBSTNodeClass {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BasriBSTCodeClass {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new BasriBSTNodeClass(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        }
      }
    }
  }
  search(value) {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value === value) {
          return currentNode;
        } else if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            return false;
          }
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            return false;
          }
        }
      }
    }
  }
  length() {
    //TBD
  }
}

// const BasriBSTTestTree = new BasriBSTCodeClass();
// BasriBSTTestTree.insert(4);
// BasriBSTTestTree.insert(5);
// BasriBSTTestTree.insert(3);
// BasriBSTTestTree.insert(6);
// BasriBSTTestTree.insert(7);
// console.log(JSON.stringify(traverse(BasriBSTTestTree.root)));
// console.log(BasriBSTTestTree.search(9))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
