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
  prepend(value) {
    value = new Node(value);

    if (!this.head) {
      this.head = value;
      this.tail = value;
    } else {
      value.next = this.head;
      this.head = value;
    }
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        return current;
      }
      current = current.next;
    }
    return -1;
  }

  findAll(value) {
    let current = this.head;
    let results = [];

    while (current) {
      if (current.value == value) {
        results.push(current);
      }
      current = current.next;
    }
    return results;
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

let myLinkedList = new LinkedList();
myLinkedList.append("hello there");
myLinkedList.append(1);
myLinkedList.append(1);
myLinkedList.append(1);
myLinkedList.append(234.32);
myLinkedList.append(1);
myLinkedList.prepend("first");

console.log(myLinkedList.findAll(1));
console.log(myLinkedList.toArray());
