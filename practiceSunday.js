class SinglyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new SinglyNode(value);
    this.tail = this.head;
    this.next = null;
    this.length = 1;
  }
  append(value) {
    let newNode = new SinglyNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
  prepend(value) {
    let newNode = new SinglyNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }
  remove(index) {
    if (index === 0) {
      let nodeJustAboutToBeRemoved = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return nodeJustAboutToBeRemoved;
    }
    let previousNode = this.traverseToIndex(index - 1);
    if (previousNode.next.next === null) {
      let nodeJustAboutToBeRemoved = previousNode.next;
      previousNode.next = null;
      this.length -= 1;
      return nodeJustAboutToBeRemoved;
    } else {
      let nodeJustAboutToBeRemoved = previousNode.next;
      let newNext = previousNode.next.next;
      previousNode.next = newNext;
      this.length -= 1;
      return nodeJustAboutToBeRemoved;
    }
  }
  traverseToIndex(index) {
    if (index === 0) {
      return this.head;
    }
    if (index >= this.length - 1) {
      return this.tail;
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }
  printAll() {
    let allArr = [];
    let currentNode = this.head;
    while (currentNode.next) {
      allArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    allArr.push(currentNode.value);
    return allArr;
  }
}

const mySinglyTest = new SinglyLinkedList(1);
mySinglyTest.append(2);
mySinglyTest.append(3);
mySinglyTest.append(4);
// console.log(mySinglyTest.printAll());
mySinglyTest.prepend(0);
// mySinglyTest.prepend(-1);
// mySinglyTest.prepend(-2);
// console.log(mySinglyTest.printAll());
// console.log(mySinglyTest.traverseToIndex(2));
// console.log(mySinglyTest.remove(0));
// console.log(mySinglyTest.printAll());

var postorder = function(root) {
  // Input: root = [1,null,3,2,4,null,5,6]
  // Output: [5,6,3,2,4,1]
  let ArrayToProcess = [];
  let tempArr = [];
  let resultArr = [];
  for (let i = 0; i < root.length; i++) {
    if (root[i] !== null) {
      tempArr.push(root[i]);
    } else {
      ArrayToProcess.push(tempArr);
      tempArr = [];
    }
  }
  if (tempArr.length !== 0) {
    ArrayToProcess.push(tempArr);
  }
  console.log(ArrayToProcess);
  for (let j = ArrayToProcess.length - 1; j >= 0; j--) {
    if (ArrayToProcess[j].length > 0) {
      for (let k = 0; k < ArrayToProcess[j].length; k++) {
        resultArr.push(ArrayToProcess[j][k]);
      }
    }
  }
  return resultArr;
};

// let rootTest1 = [1, null, 3, 2, 4, null, 5, 6];
// console.log(postorder(rootTest1));

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  //traverse/visit all nodes - say with BFS
  let queueToProcess = [];
  let tiltRunningTotal = 0;
  queueToProcess.push(root);
  while (queueToProcess.length > 0) {
    let currentNode = queueToProcess.shift();
    //for each node find the tilt
    //keep track of a running tiltTotal
    if (currentNode.left && currentNode.right) {
      tiltRunningTotal += Math.abs(
        currentNode.left.value - currentNode.right.value
      );
    }
    if (currentNode.left) {
      queueToProcess.push(currentNode.left);
    }
    if (currentNode.right) {
      queueToProcess.push(currentNode.right);
    }
  }
  //return tiltTotal
  return tiltRunningTotal;
};

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

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const BasriBSTTestTree = new BasriBSTCodeClass();
BasriBSTTestTree.insert(10);
BasriBSTTestTree.insert(7);
BasriBSTTestTree.insert(13);
BasriBSTTestTree.insert(5);
BasriBSTTestTree.insert(8);
BasriBSTTestTree.insert(11);
BasriBSTTestTree.insert(15);
//         10
//     7           13
// 5       8   11      15
// 6+3+4
// BasriBSTTestTree.insert(6);
// BasriBSTTestTree.insert(7);
// console.log(JSON.stringify(traverse(BasriBSTTestTree.root)));
// console.log(BasriBSTTestTree.search(5))
console.log(findTilt(BasriBSTTestTree.root) === 13);
