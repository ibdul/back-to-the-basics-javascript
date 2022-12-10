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
    return !(this.head && this.tail);
  }
  //   append
  append(value) {
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
  //   find
  //   findAll
  //   toArray
  toArray() {
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
console.log(myList.toArray());
