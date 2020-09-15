class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}
  
class BinarySearchTree {
constructor() {
    this.root = null;
}

insert(node) {
    //If there is no root.
    if (!this.root) {
    this.root = node;
    return this;
    }

    //Decide the starting point of comparison
    let pointer = this.root;
    while (pointer) {
    if (node.val < pointer.val) {
        if (!pointer.left) {
        pointer.left = node;
        return this;
        }
        pointer = pointer.left;
    } else if (node.val > pointer.val) {
        if (!pointer.right) {
        pointer.right = node;
        return this;
        }
        pointer = pointer.right;
    }
    }
    return this;
}

find(val) {
    if (!this.root) return false;

    let pointer = this.root;

    while (pointer) {
    if (pointer.val == val) {
        return pointer;
    }

    if (val < pointer.val) {
        pointer = pointer.left;
    } else if (val > pointer.val) {
        pointer = pointer.right;
    }
    }

    return false;
}
}

let a = new Node(5);
let b = new Node(11);
let c = new Node(45);
let d = new Node(2);
let e = new Node(28);
let f = new Node(89);
let g = new Node(9);
const tree = new BinarySearchTree();
tree.insert(a);
tree.insert(b);
tree.insert(c);
tree.insert(d);
tree.insert(e);
tree.insert(f);
tree.insert(g);

const DFS = (tree) => {
    const values = [];
    const traverse = (node) => {
        values.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(tree.root); // Traverse the tree, starting from the root.
    console.log(values);
    return values;
}

DFS(tree);