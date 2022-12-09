class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}
class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }
  append(value) {
    value = new Node(value);
    if (!this.head) {
      this.head = value;
      this.tail = value;
    } else {
      this.tail.next = value;
      this.tail = value;
    }
  }
  toArray() {
    let elements = [];

    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }
}
