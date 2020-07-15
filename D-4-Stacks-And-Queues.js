//We are interested in beginning or end!

//Good:
//Fast Operations
//Fast peek
//Ordered

//Bad:
//Slow lookup

// BigO - Stacks
// lookup O(n)
// pop O(1)
//push O(1)
// peek O(1)

// BigO - Queues
// ARRAY QUEUE BAD!
// lookup O(n)
// dequeue O(1)
// enqueue O(1)
// peek O(1)

class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    let newNode = new Node2(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    const topToGetRidOf = this.top;
    this.top = this.top.next;
    this.length -= 1;
    return topToGetRidOf;
  }
  //isEmpty
}

// const myStack = new Stack();
// myStack.push("a");
// myStack.push("b");
// myStack.push("c");
// console.log(myStack);
// console.log("last item poped:", myStack.pop());
// console.log(myStack);

class StackWithArrays {
  constructor() {
    this.holdingStack = [];
  }
  peek() {
    return this.holdingStack[-1];
  }
  push(value) {
    this.holdingStack.push(value);
    return this;
  }
  pop() {
    const topToGetRidOf = this.holdingStack.pop();
    return topToGetRidOf;
  }
  //isEmpty
}

// const myStack2 = new StackWithArrays();
// myStack2.push("a");
// myStack2.push("b");
// myStack2.push("c");
// console.log(myStack2);
// console.log("last item poped:", myStack2.pop());
// console.log(myStack2);

class NodeForQueue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new NodeForQueue(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length += 1;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const nextItemToProcess = this.first;
    const newFirstToBe = this.first.next;
    this.first = newFirstToBe;
    this.length -= 1;
    return nextItemToProcess;
  }
  listQueue() {
    let listArray = [];
    let next = this.first;
    while (next) {
      listArray.push(next.value);
      next = next.next;
    }
    return listArray;
  }
  //isEmpty;
}

// const myQueue = new Queue();
// myQueue.enqueue("Joy");
// console.log(myQueue.peek());
// myQueue.enqueue("Matt");
// console.log(myQueue.peek());
// myQueue.enqueue("Pavel");
// console.log(myQueue.peek());
// myQueue.enqueue("Samir");
// console.log(myQueue.listQueue());
// console.log(myQueue.dequeue());
// console.log(myQueue.listQueue());
// console.log(myQueue.peek());

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

// const myQueue = new CrazyQueue();
// myQueue.peek();
// console.log(myQueue.peek())
// myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// console.log(myQueue.peek())
// myQueue.peek();
// myQueue.dequeue();
// console.log(myQueue.peek())
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();
// console.log(myQueue.peek())
