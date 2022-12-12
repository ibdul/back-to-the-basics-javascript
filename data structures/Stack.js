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
    // make the new value a node
    // set the node's previous pointer to the current head
    // set the node as the new head

    value = new Node(value);
    value.previous = this.head;
    this.head = value;
  }
  // pop
  pop() {
    // O(1)
    // return the stack's head
    // if the stack is not empty, remove the current head and set it's previous element as the new head

    let value = this.head;
    if (value) {
      this.head = value.previous;
    }
    return value;
  }

  //peek
  peek() {
    // O(1)
    // return the stack's head

    return this.head;
  }

  //toArray
  toArray() {
    // O(n)
    // go through all the items in the stack
    // put each item into a list
    // return the list

    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.previous;
    }
    return values;
  }
}

const myStack = new Stack();

myStack.push("ads");
myStack.push(23);
myStack.pop();

console.log(myStack.toArray());
console.log(myStack.peek());

modules.exports = {
  Stack,
};
