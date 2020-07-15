// Head
// Tail

// Each node points to the next node.
// It has value
// The last one points to null

//BigO
//Prepend O(1)
//Append O(1)
//Lookup O(n)
//Insert O(n)
//Delete O(n)

//GOOD:
// Fast insertion
// Fast Deletion 
// Ordered
// Flexible Size

//BAD:
//Slow Lookup
//More memory

class NodeDoubly{
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null
  }
}

class NodeSingly {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListSingly {
  constructor(value) {
    this.head = new NodeSingly(value);
    this.tail = this.head;
    this.length = 1;
  }
  reverse() {
    if (this.length === 1) {
      return this.head;
    }
    let first = this.head;
    let second = this.head.next;
    this.head.next=null
    this.tail = this.head;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head = first;
    return this;
  }
  append(value) {
    const newNode = new NodeSingly(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
  prepend(value) {
    const newNode = new NodeSingly(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (this.length === 1 || index > this.length - 1) {
      this.append(value);
      return this;
    }
    let newNode = new NodeSingly(value);
    let currentNode = this.head;
    let counter = 0;
    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter += 1;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length += 1;
    return;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }
  remove(index) {
    if (index === 0) {
      if (this.length > 1) {
        this.head = this.head.next;
        this.length -= 1;
        return this;
      } else {
        return;
      }
    }
    let previousNode = this.traverseToIndex(index - 1);
    let nodeToBeRemoved = previousNode.next;
    previousNode.next = nodeToBeRemoved.next;
    this.length -= 1;
    return;
  }
  printAll() {
    let arr = [];
    if (this.length === 1) {
      arr.push(this.head.value);
      return arr;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    arr.push(currentNode.value);
    return arr;
  }
}

const BasriSingly = new LinkedListSingly(222);
console.log(BasriSingly.printAll());
BasriSingly.append(3);
console.log(BasriSingly.printAll());
BasriSingly.append(4);
console.log(BasriSingly.printAll());
BasriSingly.prepend(1);
console.log(BasriSingly.printAll());
BasriSingly.prepend(-999);
console.log(BasriSingly.printAll());
BasriSingly.insert(3, 333);
console.log(BasriSingly.printAll());
BasriSingly.reverse()
console.log(BasriSingly.printAll());
BasriSingly.remove(3);
console.log(BasriSingly.printAll());
BasriSingly.remove(0);
console.log(BasriSingly.printAll());
BasriSingly.remove(3);
console.log(BasriSingly.printAll());
BasriSingly.remove(2);
console.log(BasriSingly.printAll());
BasriSingly.remove(1);
console.log(BasriSingly.printAll());
BasriSingly.remove(0);
console.log(BasriSingly.printAll());



//================APPENDIX - MY FIRST CODE!
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }
//   reverse() {
//     if (this.length === 1) {
//       return this.head;
//     }
//     let current = this.head;
//     let next = this.head.next;
//     this.head.next = null;
//     this.tail = this.head;
//     while (next) {
//       let temp = next.next;
//       next.next = current;
//       current = next;
//       next = temp;
//     }
//     this.head = current;
//     return this;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length += 1;
//     return this;
//   }
//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length += 1;
//     return this;
//   }
//   insert(index, value) {
//     if (index === 0) {
//       this.prepend(value);
//       return;
//     }
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = new Node(value);
//     let currentTail = this.head.next;
//     let previous = null;
//     for (let i = 1; i <= index - 1; i++) {
//       previous = currentTail;
//       currentTail = currentTail.next;
//     }
//     previous.next = newNode;
//     newNode.next = currentTail;
//     return this;
//   }
//   remove(index) {
//     if (index >= this.length || index < 0) {
//       return;
//     }
//     let currentTail = this.head.next;
//     let previous = null;
//     for (let i = 1; i <= index - 1; i++) {
//       previous = currentTail;
//       currentTail = currentTail.next;
//     }
//     previous.next = currentTail.next;
//     this.length -= 1;
//     return this;
//   }
//   printList() {
//     let array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(array);
//   }
// }
