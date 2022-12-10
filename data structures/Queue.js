class Node {
  constructor(value) {
    this.value = value;
    this.previous = undefined;
    this.next = undefined;
  }
}

class Queue {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.count = 0;
  }
  // isEmpty
  isEmpty() {
    // O(1)

    return !this.count;
  }
  //enqueue

  // dequeue
  // find
  // toArray
}

const myQueue = new Queue();
console.log(myQueue.isEmpty());
