//Linear Search
//Best: O(1) Worst: O(n)
// If data is sorted we can do better O(n)

//Binary Search O(log N)
// Breadth First Search (BFS) - Left to right per level
//Depth First Search (DFS) - Go to the end of every branch (less memory as no need to keep track of all nodes)

// Traversal:
// O(n) both BFS, DPS
// Order matters

// BFS:
// Good is you know the node is LIKELY to be in the first levels
//PROS:
// Shortest Path
// Closer Nodes
//CONS:
// More memory

//DFS
//PROS:
// Less Memory
// Does path exist?
//CONS:
// Can get slow (Due to recursive calls)

// DIJKSTRA + Bellman-Ford
// Find the shortest path between two nodes of a weighted graph
// Bellman can also deal with negative weights! O(n^2)
// Usual Google Maps Dijkstra!

//If you know a solution is not far from the root of the tree:
// BFS
//If the tree is very deep and solutions are rare:
// BFS - DFS will take long time (very deep)

//If the tree is very wide:
//DFS

//If solutions are frequent but located deep in the tree:
//DFS

//Determining whether a path exists between two nodes:
//DFS

//Finding the shortest path:
//BFS

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
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = []; //this could get really big!
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
  isValidBST(rootNode) {
    let currentNode = rootNode
    let listOfNodesToProcess = [];
    while (currentNode) {
        console.log('currentNode:',currentNode.value)
      if (currentNode.left && currentNode.right) {
        if (currentNode.left.value > currentNode.right.value) {
          return false;
        }
      }
      if (currentNode.left) {
        listOfNodesToProcess.push(currentNode.left);
      }
      if (currentNode.right) {
        listOfNodesToProcess.push(currentNode.right);
      }
      currentNode=listOfNodesToProcess.shift()
    }
    return true
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const BasriBSTTestTree = new BasriBSTCodeClass();
BasriBSTTestTree.insert(1);
BasriBSTTestTree.insert(4);
BasriBSTTestTree.insert(6);
BasriBSTTestTree.insert(9);
BasriBSTTestTree.insert(15);
BasriBSTTestTree.insert(20);
BasriBSTTestTree.insert(170);

// console.log(JSON.stringify(traverse(BasriBSTTestTree.root)));
console.log(BasriBSTTestTree.search(9));
console.log(BasriBSTTestTree.breadthFirstSearch());
console.log(BasriBSTTestTree.breadthFirstSearchR([BasriBSTTestTree.root], []));
console.log(BasriBSTTestTree.DFSInOrder());
console.log(BasriBSTTestTree.isValidBST(BasriBSTTestTree.root));

//              9
//      4               20
//1         6      15       170
//InOrder = [1,4,6,9,15,20,170] REALLY SORTED
//PreOrder = [9,4,1,6,20,15,170] EASILY RECREATE A TREE
//PostOrder = [1,6,4,15,170,20,9]
