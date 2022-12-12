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
    // O(1)
    // first make the value a node
    // if the list is empty, make it the first element (make it the head and tail)
    // else add it to the end and move the list's tail pointer to it and the tail's next poiner should point to it

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
    // O(1)
    // first make the value a node
    // if the list is empty, make it the first element (make it the head and tail)
    // else add it to the front and move the list's head pointer to it and make it point to the old head as its next element

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
    return -1;
  }

  findAll(value) {
    // O(n)
    // continously check the items in the list till the tail
    // populate a list with matching nodes
    // return the list after reaching the end
    // return an empty list otherwise

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

  delete(value) {
    // O(n)
    // start checking from the head
    // check iteratively
    // if the head is the value, move the list's pointer to the next item
    // if it is the tail, move the list's tail pointer to the element before the tail
    // else, move the next pointer of the element before the current to the element after the current.

    let current = this.head;
    let previous = this.head;

    while (current) {
      if (current.value == value) {
        if (current == this.head) {
          this.head = this.head.next;
        } else if (current.next == this.tail) {
          this.tail = previous;
        } else {
          previous.next = current.next;
        }
      } else {
        previous = current;
      }
      current = current.next;
    }
  }

  toArray() {
    // O(n)
    // transverse the list to the end
    // while moving, copy the value of each node to a list
    // return the list at the end

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
myLinkedList.prepend(1);
myLinkedList.delete(2);

console.log(myLinkedList.toArray());
