class Node {
  constructor(value) {
    this.parent = undefined;
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
  // add
  add(value) {
    // O(n/2)
    value.parent = this;
    if (this.value > value.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = value;
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = value;
      }
    }
  }
}

class BinaryTree {
  constructor() {
    this.root = undefined;
  }

  // add
  add(value) {
    // O(n/2)

    value = new Node(value);

    if (!this.root) {
      this.root = value;
    } else {
      this.root.add(value);
    }
  }

  // describe
  describe() {
    // O(n);
    let values = [];

    if (!this.root) {
      return values;
    } else {
      values = this.root.describe();
    }
    return values;
  }
}

const myTree = new BinaryTree();
myTree.add(10);
myTree.add(3);
myTree.add(1);
myTree.add(6);
myTree.add(8);
myTree.add(4);
myTree.add(5);
myTree.add(9);
// console.log(myTree.find(3));
// myTree.remove(9);
console.log(myTree.describe());
console.log(myTree.describe());
