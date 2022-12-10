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
  push(value) {
    // O(1)

    value = new Node(value);
    value.previous = this.head;
    this.head = value;
  }
  // pop
  //peek
  //toArray
  toArray() {
    // O(n)

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

myQueue.push("ads");
myQueue.push(23);

console.log(myQueue.toArray());
