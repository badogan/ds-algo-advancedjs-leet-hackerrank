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
  traverseToIndex(value) {
    if (value === 0) {
      return this.head;
    }
    if (value === this.length - 1) {
      return this.tail;
    }
    if (value >= this.length) {
      return this.tail;
    }
    let currentNode = this.head;
    let index = 0;
    while (value !== index) {
      currentNode = currentNode.next;
      index += 1;
    }
    return currentNode;
  }
  insert(value, index) {
    let newNode = new NodeSingly(value);
    let previousNode = this.traverseToIndex(index - 1);
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length += 1;
  }
  remove(index) {
    let previousNode = this.traverseToIndex(index - 1);
    let newNext = previousNode.next.next;
    previousNode.next = newNext;
    this.length -= 1;
  }
  findFirst(value) {
    //TODO: Edge cases - minor/ignore for now
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return { value: value, index: index };
      }
      currentNode = currentNode.next;
      index += 1;
    }
    return false;
  }
  findAll(value) {
    let currentNode = this.head;
    let foundArr = [];
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        foundArr.push({ value: value, index: index });
      }
      currentNode = currentNode.next;
      index += 1;
    }
    return foundArr.length !== 0 ? foundArr : false;
  }
  printAll() {
    //TODO: Edge cases
    if (this.length === 1) {
      return [this.head.value];
    }
    let currentNode = this.head;
    let allArr = [];
    while (currentNode) {
      allArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return allArr;
  }
}

// const BasriSinglyExample = new SinglyLinkedList(2);
// BasriSinglyExample.append(3);
// BasriSinglyExample.append(4);
// BasriSinglyExample.prepend(1);
// BasriSinglyExample.prepend(0);
// BasriSinglyExample.insert(333, 3);
// // console.log(BasriSinglyExample.traverseToIndex(2));
// console.log(BasriSinglyExample.printAll());
// // BasriSinglyExample.remove(3);
// // console.log(BasriSinglyExample.printAll());
// // console.log(BasriSinglyExample.findFirst(1));
// // console.log(BasriSinglyExample.findFirst(11));
// BasriSinglyExample.append(5);
// BasriSinglyExample.append(5);
// console.log(BasriSinglyExample.printAll());
// console.log(BasriSinglyExample.findAll(56));

class NodeTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new NodeTree(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    //TODO: Think about the edge cases to handle
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
  search(value) {
    if (value === this.root.value) {
      return this.root;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        return false;
      }
    }
  }
  maxNumberOfLevels() {
    return helper(this.root, 0, []);
  }
  searchBFS() {
    let valuesCollected = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      console.log(queue);
      let currentNode = queue.shift();
      valuesCollected.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return valuesCollected;
  }
  searchDFS() {
    return searchDFSHelper(this.root, []);
  }
}

function searchDFSHelper(node, arr) {
  arr.push(node.value);
  if (node.left) {
    searchDFSHelper(node.left, arr);
  }
  if (node.right) {
    searchDFSHelper(node.right, arr);
  }
  return arr;
}

function helper(startingNode, number, arr) {
  number += 1;
  arr.push(number);
  //   console.log(number);
  if (startingNode.left) {
    helper(startingNode.left, number, arr);
  }
  if (startingNode.right) {
    helper(startingNode.right, number, arr);
  }
  return [...new Set(arr)].sort((a, b) => (a > b ? -1 : 1))[0] - 1;
}

let BasriTreeExample = new BSTTree();
BasriTreeExample.insert(50);
BasriTreeExample.insert(40);
BasriTreeExample.insert(60);
BasriTreeExample.insert(30);
BasriTreeExample.insert(70);
BasriTreeExample.insert(20);
BasriTreeExample.insert(35);
BasriTreeExample.insert(55);
BasriTreeExample.insert(80);
BasriTreeExample.insert(90);
BasriTreeExample.insert(85);
BasriTreeExample.insert(88);
BasriTreeExample.insert(63);
BasriTreeExample.insert(45);
BasriTreeExample.insert(75);
// console.log(BasriTreeExample.search(40));
// console.log(BasriTreeExample.maxNumberOfLevels());
// console.log(BasriTreeExample);
// console.log(BasriTreeExample.searchBFS());
console.log(BasriTreeExample.searchDFS());

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function SuperSpeedFib() {
  //Time complexity: O(n)
  //Space complexity more
  let cache = {};
  return function fib(n) {
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// let myFibHelper = SuperSpeedFib();
// console.log(myFibHelper(9));

function insertionSortBasri(arr) {
  const arrLength = arr.length;
  //iterate thru the array.
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    }
    for (let j = i; j > 0; j--) {
      if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
        arr.splice(j, 0, arr.splice(i, 1)[0]);
      }
    }
  }
  //in every iteration find out if there is any value smaller than the current value
  return arr;
}

// let testInsertion1 = [1, 2, 5, 3, 8, 4, 9, 5, 10, 1, -4];
// console.log(insertionSortBasri(testInsertion1));

function mergeSortBasri(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midIndex);
  let rightArr = arr.slice(midIndex);
  return mergeHelper(mergeSortBasri(leftArr), mergeSortBasri(rightArr));
}

function mergeHelper(leftArr, rightArr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArr = [];

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      sortedArr.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      sortedArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }
  let result = sortedArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
  return result;
}

// let testMergeSort1 = [1, 2, 5, 3, 8, 4, 9, 5, 10, 1, -4];
// console.log(mergeSortBasri(testMergeSort1));
