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
  //   prepend
  //   delete
  //   find
  //   findAll
  //   toArray
}

const myList = new DoublyLinkedList();
console.log(myList.isEmpty());
