class Node {
  constructor(value) {
    this.value = value;
    this.previous = undefined;
  }
}

class Queue {
  constructor() {
    this.head = undefined;
  }
  // push
  // pop
  //peek
  //toArray
  toArray() {
    // O(n);

    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.previous;
    }
    return values;
  }
}

const myQueue = new Queue();

console.log(myQueue.toArray());
