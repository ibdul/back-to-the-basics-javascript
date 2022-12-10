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
  enqueue(value) {
    // O(1)

    value = new Node(value);

    if (this.isEmpty()) {
      this.head = value;
    } else {
      this.tail.next = value;
      value.previous = this.tail;
    }
    this.count++;
    this.tail = value;
  }

  // dequeue
  dequeue() {
    // O(1);

    if (!this.isEmpty()) {
      this.head = this.head.next;
    }
    this.count--;
    return this.head;
  }
  // find
  // toArray

  toArray() {
    // O(n)

    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.toArray());
