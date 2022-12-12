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
    // if queue count is 0, the queue is empty

    return !this.count;
  }
  //enqueue
  enqueue(value) {
    // O(1)
    // make a new node with the desired value
    // if the queue is empty, just set the new node as the head and tail
    // if there are already items, add it behind the tail and set the pointers accordingly
    // increment the count value

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
    // if the list is not empty,
    // return the head and set the head pointer to the head's next value
    // decrement count

    const output = this.head;
    if (!this.isEmpty()) {
      this.head = this.head.next;
      this.count--;
    }
    return output;
  }
  // find
  // toArray

  toArray() {
    // O(n)
    // check all the values in the queue,
    // whilst doing so, make a copy of all the values in a list
    // return the list

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

module.exports = {
  Queue,
};
