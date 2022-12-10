class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
    this.previous = undefined;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }
  isEmpty() {
    // O(1)

    return !(this.head && this.tail);
  }
  //   append
  append(value) {
    // O(1)

    value = new Node(value);

    if (this.isEmpty()) {
      this.head = value;
    } else {
      value.previous = this.tail;
      this.tail.next = value;
    }
    this.tail = value;
  }

  //   prepend
  prepend(value) {
    // O(1)

    value = new Node(value);

    if (this.isEmpty()) {
      this.head = value;
      this.tail = value;
    } else {
      value.next = this.head;
      this.head.previous = value;
      this.head = value;
    }
  }

  //   delete
  delete(value) {
    // O(n)

    let current = this.head;

    while (current) {
      if (current.value == value) {
        if (current == this.head) {
          current.next.previous = undefined;
          this.head = current.next;
        } else if (current == this.tail) {
          this.tail = current.previous;
          this.tail.next = undefined;
        } else {
          current.previous.next = current.next;
        }
      }
      current = current.next;
    }
  }
  //   find
  find(value) {
    // O(n)

    let current = this.head;
    while (current) {
      if (current.value == value) {
        return current;
      }
      current = current.next;
    }
    return undefined;
  }
  //   findAll
  findAll(value) {
    // O(n)

    let current = this.head;
    let matches = [];
    while (current) {
      if (current.value == value) {
        matches.push(current);
      }
      current = current.next;
    }
    return matches;
  }
  //   toArray
  toArray() {
    // O(n)

    let values = [];
    if (!this.isEmpty()) {
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
    }
    return values;
  }
}

const myList = new DoublyLinkedList();
myList.append(2);
myList.append(4);
myList.prepend(34);
myList.prepend(54);
myList.prepend(54);
myList.prepend(54);
myList.append(12);
myList.append(54);
console.log(myList.findAll(54));
myList.delete(54);
console.log(myList.findAll(54));

console.log(myList.toArray());
