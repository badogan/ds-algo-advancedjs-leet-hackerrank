//SINGLY LINKED LIST
class NodeSingly {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor(value) {
    this.head = new NodeSingly(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new NodeSingly(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }
  prepend(value) {
    let newNode = new NodeSingly(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }
  printAll() {
    if (this.length === 1) {
      return [this.head.value];
    }
    let totalValue = 0;
    let result = [];
    let currentNode = this.head;
    while (currentNode) {
      totalValue += currentNode.value;
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    let length = this.length;
    return { result, totalValue, length };
  }
  traverseToIndex(index) {
    if (index === 0) {
      return this.head;
    }
    if (index >= this.length - 1) {
      return this.tail;
    }
    let counter = 0;
    let currentNode = this.head;
    while (index !== counter) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }
  insert(index, value) {
    let newNode = new NodeSingly(value);
    let previousNode = this.traverseToIndex(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length += 1;
  }
  remove(index) {
    let previousNode = this.traverseToIndex(index - 1);
    let temp = previousNode.next.next;
    previousNode.next = temp;
    this.length -= 1;
  }
  depth() {
    return this.length;
  }
  reverse() {
    if (this.length === 1) {
      return this.head;
    }
    let first = this.head;
    let second = this.head.next;
    this.head.next = null;
    this.tail = this.head;
    while (second) {
      let temp = second.next;
      second.next = first; //the real ops
      first = second;
      second = temp;
    }
    this.head = first;
    return this;
  }
}
function mainSingly() {
  let BasriSinglyInstance = new SinglyLinkedList(1);
  BasriSinglyInstance.append(2);
  BasriSinglyInstance.append(5);
  BasriSinglyInstance.prepend(0);
  console.log(BasriSinglyInstance.printAll());
  // console.log(BasriSinglyInstance.traverseToIndex(2));
  BasriSinglyInstance.insert(3, 333);
  BasriSinglyInstance.insert(4, 444);
  console.log(BasriSinglyInstance.printAll());
  BasriSinglyInstance.remove(4);
  console.log(BasriSinglyInstance.printAll());
  console.log(BasriSinglyInstance.depth());
  BasriSinglyInstance.reverse();
  console.log(BasriSinglyInstance.printAll());
}
// mainSingly();

// TREE
class NodeTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BSTree {
  constructor(value) {
    this.root = new NodeTree(value);
  }
  append(value) {
    let newNode = new NodeTree(value);
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return;
        }
      }
    }
  }
  BFSearch() {
    let queue = [];
    let result = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }
  DFSearch() {
    return DFSearchHelper(this.root, []);
  }
}

function DFSearchHelper(node, arr) {
  if (node.left) {
    DFSearchHelper(node.left, arr);
  }
  arr.push(node.value);
  if (node.right) {
    DFSearchHelper(node.right, arr);
  }
  return arr;
}

function mainBSTree() {
  let myBSTree = new BSTree(10);
  myBSTree.append(5);
  myBSTree.append(15);
  myBSTree.append(25);
  myBSTree.append(2);
  myBSTree.append(6);
  myBSTree.append(14);
  myBSTree.append(1);
  myBSTree.append(13);
  //   console.log(myBSTree);
  //   console.log(myBSTree.BFSearch());
  console.log(myBSTree.DFSearch());
}

// mainBSTree();

//STACK

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.bottom = null;
    this.top = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new StackNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }
    this.length += 1;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    let newTop = this.top.next;
    this.top = newTop;
    this.length -= 1;
  }
}

class Graph {
  constructor() {
    this.adjacentList = {};
    this.numberOfNodes = 0;
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes += 1;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

function busyFinder(arr) {
  //Assumption: input array sorted on starting times
  let solution = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let theLastOne = solution[solution.length - 1];
    if (arr[i][0] < theLastOne[0]) {
      theLastOne[0] = arr[i][0];
    } else if (arr[i][0] > theLastOne[1]) {
      solution.push(arr[i]);
    } else if (arr[i][0] > theLastOne[0] && arr[i][1] > theLastOne[1]) {
      theLastOne[1] = arr[i][1];
    }
  }
  return solution;
}

function mainBusyFinder() {
  let testArr = [
    [15, 200],
    [30, 100],
    [115, 300],
    [115, 150],
    [350, 450],
    [450, 500],
    [500, 600]
  ];
  console.log(busyFinder(testArr));
}

// mainBusyFinder();

function arrangingCoins(input) {
  if (input === 0) {
    return 0;
  }
  if (input < 3) {
    return 1;
  }
  //brute force - literally calculating till it is more than input
  //return that last n (where it was still less)
  let currentN = 1;
  let sum = 0;
  while (sum <= input) {
    //loop n(n+1)/2 > n
    sum = (currentN * (currentN + 1)) / 2; //3
    currentN += 1; //3
  }
  //return "last n"
  return currentN - 2;
}
function mainArrangingCoins() {
  console.log(arrangingCoins(5) === 2);
  console.log(arrangingCoins(8) === 3);
}
// mainArrangingCoins();

class LeetNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class LeetBSTree {
  constructor() {
    this.root = null;
  }
  append(value) {
    let newNode = new LeetNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
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
  printAll() {
    if (!this.root) {
      return [];
    }
    let result = [];
    let queue = [this.root];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }
  printLevels() {
    if (!this.root) {
      return [[]];
    }
    let result = [];
    let queue = [this.root];
    let currentLevelNodes = [];
    let currentLevelValues = [];
    //construct currentLevelNodes - how?
    // console.log(queue)
    while (queue.length > 0) {
      while (queue.length > 0) {
        currentLevelNodes.push(queue.shift());
      }
      //   console.log("currentLevelNodes:", currentLevelNodes);
      while (currentLevelNodes.length > 0) {
        let currentNode = currentLevelNodes.shift();
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
        //process currentLevelNodes - push the values to a levelArray
        currentLevelValues.push(currentNode.value);
      }
      //push the levelArray to results
      result.push(currentLevelValues);
      //reset levelArray
      currentLevelValues = [];
    }
    return result;
  }
  levelOrderBottom(root) {
    if (!root) {
      return [];
    }
    let result = [];
    let queue = [root];
    let currentLevelNodes = [];
    let currentLevelValues = [];
    //construct currentLevelNodes - how?
    // console.log(queue)
    while (queue.length > 0) {
      while (queue.length > 0) {
        currentLevelNodes.push(queue.shift());
      }
      //   console.log("currentLevelNodes:", currentLevelNodes);
      while (currentLevelNodes.length > 0) {
        let currentNode = currentLevelNodes.shift();
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
        //process currentLevelNodes - push the values to a levelArray
        currentLevelValues.push(currentNode.value);
      }
      //push the levelArray to results
      result.unshift(currentLevelValues);
      //reset levelArray
      currentLevelValues = [];
    }
    return result;
  }
}

function mainLeetWeek1BinaryTreeLevelOrder() {
  let myTree = new LeetBSTree();
  myTree.append(10);
  myTree.append(20);
  myTree.append(30);
  myTree.append(5);
  myTree.append(42);
  myTree.append(51);
  myTree.append(62);
  myTree.append(25);
  myTree.append(12);
  myTree.append(17);
  myTree.append(11);
  //   console.log(myTree.printAll());
  console.log(myTree.printLevels());
  console.log(myTree.levelOrderBottom(myTree.root));
}
// mainLeetWeek1BinaryTreeLevelOrder();

function prisonRules(arr) {
  //current state arr
  //   If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
  // Otherwise, it becomes vacant.

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      // (Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)
      arr[i] = 0;
    }

    if (i === arr.length - 1) {
      arr[i] = 0;
    }

    if (
      (arr[i - 1] === 1 && arr[i + 1] === 1) ||
      (arr[i - 1] === 0 && arr[i + 1] === 0)
    ) {
      arr[i] = 1;
    } else {
      arr[i] = 0;
    }
  }
  return arr;
  //output new state of the arr
}
function mainPrision() {
  let prisonState = [0, 1, 0, 1, 1, 0, 0, 1];
  let numberOfDays = 1;
  for (let i = 1; i <= numberOfDays; i++) {
    prisonState = prisonRules(prisonState);
  }
  console.log(prisonState);
  return prisonState;
  //   Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
  // Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
  // Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
  // Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
  // Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
  // Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
  // Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
  // Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
}
// mainPrision();

class Ugly {
  constructor() {
    this.uglyNumbersArr = [1];
    this.TwoCount = 0;
    this.ThreeCount = 0;
    this.FiveCount = 0;
  }
  findTheNextUgly(n) {
    while (true) {
      this.TwoCount += 1;
      this.uglyNumbersArr.push(
        this.TwoCount * 2 + this.ThreeCount * 3 + this.FiveCount * 5
      );
      console.log(this.uglyNumbersArr);
      if (this.uglyNumbersArr[this.uglyNumbersArr.length - 1] >= n) {
        return this.uglyNumbersArr[this.uglyNumbersArr.length - 1];
      }

      this.ThreeCount += 1;
      this.uglyNumbersArr.push(
        this.TwoCount * 2 + this.ThreeCount * 3 + this.FiveCount * 5
      );
      console.log(this.uglyNumbersArr);
      if (this.uglyNumbersArr[this.uglyNumbersArr.length - 1] >= n) {
        return this.uglyNumbersArr[this.uglyNumbersArr.length - 1];
      }

      this.FiveCount += 1;
      this.uglyNumbersArr.push(
        this.TwoCount * 2 + this.ThreeCount * 3 + this.FiveCount * 5
      );
      console.log(this.uglyNumbersArr);
      if (this.uglyNumbersArr[this.uglyNumbersArr.length - 1] >= n) {
        return this.uglyNumbersArr[this.uglyNumbersArr.length - 1];
      }
    }
  }
}

function nthUglyNumber(n) {
  let myUgly = new Ugly();
  return myUgly.findTheNextUgly(n);
}

function mainnthUglyNumber() {
  let N1 = 1700;
  console.log(nthUglyNumber(N1));
}

// mainnthUglyNumber();

var hammingDistance = function(x, y) {
  //For binary strings a and b the Hamming distance is equal to the number of ones (population count) in a XOR b.[3]
  //convert x and y to binary - Xbin, Ybin // NO NEED!
  let XORed = (x ^ y).toString(2);
  return XORed.toString()
    .split("")
    .reduce((sum, num) => sum + parseInt(num), 0);
  //Count the number of 1's in xored - how? / GOT IT
};

function mainhammingDistance() {
  let x = 93; //1; // 93;
  let y = 73; //4; // 73;
  console.log(hammingDistance(x, y));
}

// mainhammingDistance();

var islandPerimeter = function(grid) {
  //iterate through "the array"
  let perimeter = 0;
  let countForThisRound;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // when there is 1 check how many "sides" of that cell has some "neighbour" - find the total num of such neighbours -neighbourCount
      countForThisRound = 4;
      if (grid[i][j] === 1) {
        if (
          grid[i] !== null &&
          grid[i][j + 1] !== null &&
          grid[i][j + 1] === 1
        ) {
          countForThisRound -= 1;
        }
        if (
          typeof grid[i] !== "undefined" &&
          typeof grid[i][j - 1] !== "undefined" &&
          grid[i][j - 1] === 1
        ) {
          countForThisRound -= 1;
        }
        if (
          typeof grid[i + 1] !== "undefined" &&
          typeof grid[i + 1][j] !== "undefined" &&
          grid[i + 1][j] === 1
        ) {
          countForThisRound -= 1;
        }
        if (
          typeof grid[i - 1] !== "undefined" &&
          typeof grid[i - 1][j] !== "undefined" &&
          grid[i - 1][j] === 1
        ) {
          countForThisRound -= 1;
        }
        // total of (4-neighbourCount) would give perimeter for the island
        perimeter += countForThisRound;
      }
    }
  }
  return perimeter;
  // return perimeter
};

function mainIslandPerimeter() {
  let testArr = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ];
  console.log(islandPerimeter(testArr));
}

// mainIslandPerimeter();
