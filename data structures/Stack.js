class Node {
  constructor(value) {
    this.value = value;
    this.previous = undefined;
  }
}

class Stack {
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
  pop() {
    // O(1)

    let value = this.head;
    if (value) {
      this.head = value.previous;
    }
    return value;
  }

  //peek
  peek() {
    // O(1)

    return this.head;
  }

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

const myQueue = new Stack();

myQueue.push("ads");
myQueue.push(23);
myQueue.pop();

console.log(myQueue.toArray());
console.log(myQueue.peek());

modules.exports = {
  Stack,
};
