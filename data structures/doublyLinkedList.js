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
    // if there is no head and no tail in the list, it is empty.

    return !(this.head && this.tail);
  }
  //   append
  append(value) {
    // O(1)
    // first make the value a node
    // if the list is empty, make it the first element (make it the head and tail)
    // else add it to the end and move the list's tail pointer to it and the tail's next poiner should point to it

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
    // first make the value a node
    // if the list is empty, make it the first element (make it the head and tail)
    // else add it to the front and move the list's head pointer to it and make it point to the old head as its next element

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
    // start checking from the head
    // check iteratively
    // if the head is the value, move the list's pointer to the next item
    // if it is the tail, move the list's tail pointer to the element before the tail
    // else, move the next pointer of the element before the current to the element after the current.
    // adjust the previous pointers accordingly as well

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
    // continously check the items in the list till the tail
    // if a match is found, return the node
    // return undefined otherwise

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
    // continously check the items in the list till the tail
    // populate a list with matching nodes
    // return the list after reaching the end
    // return an empty list otherwise

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
    // transverse the list to the end
    // while moving, copy the value of each node to a list
    // return the list at the end

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
