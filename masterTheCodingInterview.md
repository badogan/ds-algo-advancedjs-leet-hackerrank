//26 Big O Scalability
//27 O(n)
O(n) => Linear TimeRanges. It increases as per the number of n
"how quickly our runtime grows"
"as things grow how "
O(n) - linear, proportionally increasing
//28 O(1)
O(1): constant time "however many boxes we always take 1"
the number of operations stay flat
//33 Simplifying Big O
//34 Rule 1: Worst Case
//35 Rule 2: Remove Constants
//36 Rule 3: Different terms for inputs
O(a+b)
//37 O(n^2)
const boxes = ['a','b','c','d','e']
function logAll(arr){
  for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr.length;j++){
      console.log(arr[i],arr[j])
    }
  }
}
logAll(boxes)
//38 Rule 4: Drop non-dominants
O(n+n^2) becomes O(n^2)
#Big O Cheat Sheet:
-Big OsO(1) Constant- no loops
O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
O(n) Linear- for loops, while loops through n items
O(n log(n)) Log Liniear- usually sorting operations
O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops
O(2^n) Exponential- recursive algorithms that solves a problem of size N
O(n!) Factorial- you are adding a loop for every element
Iterating through half a collection is still O(n)
Two separate collections: O(a * b)
-What can cause time in a function?-
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())
-Rule BookRule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms
-What causes Space complexity?-
Variables
Data Structures
Function Call
Allocations
//40 What does it all meand?
Data structures + Algorithms = Programs
//41 O(n!)
Adding a loop for every element!
//42 3 Pillars of Programming
1. Readable
2. Scalable - Speed [Time complexity]
2. Scalable - Memory [Space Complexity]
//44 Space Complexity
O(1)
O(n)
//46 Optional JS Loops
array.forEach(fish=>fish)

for (let fish of array){
    fish
}

//49 What companies are looking for?
1. Analytical Skills
2. Coding skills
3. Technical skills
4. Communication skills
//50 What we need for coding interviews
Data Structures: Arrays, Stacks, Queues, Linked Lists, Trees, Tries, Graphs, Hash Tables
Algorithms: Sorting, Dynamic Programming, BFS + DFS, Recursion
//60 Data Structures
Numbers, 
//62 Arrays
strings.push('e') //O(1)
strings.pop() //O(1)
strings.unshift('x') //O(n)
strings.splice(2,0,'alien') //O(n/2)=>O(n)
//63 Static vs Dynamic Arrays
//65 Classes in JS:
class Player {
    constructor(name,type){
        this.name = name
        this.type = type
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`)
    }
}
class Wizard extends Player{
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`Weeee I am a ${this.type}`)
    }
}
const wizard1 = new Wizard('Shelly','Healer')
const wizard2 = new Wizard('Shawn','Dark Magic')


//76 Hash Collisions
insert O(1)
//77 Hash Tables In different Languages
const a = new Map()
const b = new Set()

//88 What is a linked list?
head->next element->next element->tail
sequental items
iterating thorugh linked list is slower, but inserting is better
prepend O(1)
append O(1)
lookup O(n)
insert O(n)
delete O(n)
//91 What is a pointer?
pointer to a place in memory - reference to another location in memory
JS "garbage collection"

//92 First linked list
let myLinkedList = {
  head:{
    value: 10 ,
    next: {value: 5,
      next: {value:16 ,
        next: null}
  }
}

let myLinkedList = {
    head: {
      value: 10,
      next: {
        value: 5,
        next: {
          value: 16,
          next: null
        }
      }
    }
  };
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      };
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      // return this;
    }
    insert(index, value) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
      if (index >= this.length) {
        return this.append(value);
      }
      const newNode = {
        value: value,
        next: null
      };
      let currentTail = this.head.next;
      let previous = null;
      for (let i = 1; i <= index - 1; i++) {
        previous = currentTail;
        currentTail = currentTail.next;
      }
      previous.next = newNode;
      newNode.next = currentTail;
      return this;
    }
    remove(index) {
      if (index >= this.length || index < 0) {
        return;
      }
      let currentTail = this.head.next;
      let previous = null;
      for (let i = 1; i <= index - 1; i++) {
        previous = currentTail;
        currentTail = currentTail.next;
      }
      previous.next = currentTail.next;
      this.length -= 1;
      return this;
    }
    printList() {
      let array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(array);
    }
  }
  
  // const myLinkedList2 = new LinkedList(2);
  // myLinkedList2.append(3);
  // myLinkedList2.append(17);
  // myLinkedList2.prepend(1);
  // myLinkedList2.prepend(100);
  // myLinkedList2.insert(200, 99);
  // myLinkedList2.printList();
  // myLinkedList2.remove(3);
  // myLinkedList2.remove(300);
  // myLinkedList2.remove(-8);
  // myLinkedList2.printList();
  
  class DoublyNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  // 100 Doubly Linked Lists

  class DoublyLinkedList {
    constructor(value) {
      // this.head = {
      //   value: value,
      //   next: null,
      //   prev: null
      // };
      this.head = new DoublyNode(value)
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      // const newNode = {
      //   value: value,
      //   next: null,
      //   prev: null
      // };
      const newNode = new DoublyNode(value)
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        prev:null
      };
      newNode.next = this.head;
      this.head.prev = newNode
      this.head = newNode;
      this.length += 1;
      // return this;
    }
    insert(index, value) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
      if (index >= this.length) {
        return this.append(value);
      }
      const newNode = {
        value: value,
        next: null,
        prev: null
      };
      let currentTail = this.head.next;
      let previous = null;
      for (let i = 1; i <= index - 1; i++) {
        previous = currentTail;
        currentTail = currentTail.next;
      }
      newNode.prev = previous
      previous.next = newNode;
      newNode.next = currentTail;
      return this;
    }
    remove(index) {
      if (index >= this.length || index < 0) {
        return;
      }
      let currentTail = this.head.next;
      let previous = null;
      for (let i = 1; i <= index - 1; i++) {
        previous = currentTail;
        currentTail = currentTail.next;
      }
      previous.next = currentTail.next;
      this.length -= 1;
      return this;
    }
    printList() {
      let array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(array);
    }
  }
  
  const myDoublyLinkedList = new DoublyLinkedList(2);
  myDoublyLinkedList.append(3)
  myDoublyLinkedList.append(4)
  myDoublyLinkedList.printList()
  myDoublyLinkedList.prepend(1)
  myDoublyLinkedList.printList()
  myDoublyLinkedList.insert(200, 99);
  myDoublyLinkedList.printList()
  myDoublyLinkedList.insert(2, 999);
  myDoublyLinkedList.printList()
  myDoublyLinkedList.remove(300)
  myDoublyLinkedList.printList()
  myDoublyLinkedList.remove(-6)
  myDoublyLinkedList.printList()
  myDoublyLinkedList.remove(3)
  myDoublyLinkedList.printList()

  //108 Stacks
  LIFO
  Lookup O(n)
  pop (1)
  push O(1)
  peek O(1)

  //109 Queues
  FIFO
  Lookup O(n)
  enqueue O(1)
  dequeue O(1)
  peek O(1)

  //123 Binary Trees
  "Completely full"
  "Perfect Binary Tree" - Doubles each level as we move down ; end of the nodes x 2-1 up
  "Full Binary Tree"

  //124 O(log n)
  Level n: 2^n
  log nodes = steps
  efficiency
  divide and conquer
  no need to check on everything

  //141 Graphs
  set of values related in a pair-wise fashion
  Node ==== vertex
  Nodes are connected with edges
  Graphs include trees and linked Lists
  DIRECTED vs UNDIRECTED
  WEIGHTED vs UNWEIGHTED (when there is a value in the edges)
  CYCLIC vs ACYCLIC
 //Edge List
const graphEdgeList = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
];
//Adjecent List - index is the node, value is the nodes neighbours
const graphAdjecentList = [[2], [2, 3], [0, 1, 3], [1, 2]];
//Adjacent MAtrix
const graphAdjacentMatrix = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1]
};

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node]=[];
    this.numberOfNodes += 1;
    return this;
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
    return this
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5

//147 Graphs Review
PRO: Relationships
CON: Scaling is hard!
Neojs=>Graph DB

// 150 Algorithms
steps to achieve stuff 
allows us use data structures to operate on data
data structures + algorithms = programs
classes + functions{}

//151 Recursion
1. identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed (usually 2 returns!)

PROS: DRY, Readability
CONS: Large Stack