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
  // remove
  remove(value, side = undefined) {
    // O(n/2)

    if (value < this.value) {
      this.left.remove(value, "left");
    } else if (value > this.value) {
      this.right.remove(value, "right");
    } else if (value == this.value) {
      if (this.left || this.right) {
      } else {
        if (side == "left") {
          this.parent.left = undefined;
        } else if (side == "right") {
          this.parent.right = undefined;
        }
      }
    }
  }
  // describe
  describe(values = []) {
    // O(n)

    if (this.left) {
      this.left.describe(values);
    }
    values.concat(values.push(this.value));
    if (this.right) {
      this.right.describe(values);
    }
    return values;
  }

  find(value) {
    // O(n/2)

    if (value == this.value) {
      return this.value;
    } else if (value < this.value) {
      return this.left.find(value);
    } else {
      return this.right.find(value);
    }
  }
}

class BinaryTree {
  constructor() {
    this.root = undefined;
  }
  // find
  find(value) {
    // O(n/2)

    if (this.root) {
      return this.root.find(value);
    }
    return undefined;
  }
  // findAll
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
  // remove
  remove(value) {
    // O(n/2)

    if (this.root) {
      this.root.remove(value);
    }
  }
  // describe
  describe() {
    // O(n)

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
console.log(myTree.find(3));
myTree.remove(9);
console.log(myTree.describe());
console.log(myTree.describe());
