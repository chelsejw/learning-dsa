class Node {
    constructor(val){
        this.val = val
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(node) {
        //If there is no root.
        if (!this.root) {
            this.root = node;
            return this;
        }

        //Decide the starting point of comparison
        let pointer = this.root

        console.log(`My pointer is ${pointer.val}`)
        while (pointer) {
            if (node.val < pointer.val) {
                if (!pointer.left) {
                    pointer.left = node
                    return this
                }
                pointer = pointer.left
            } else if (node.val > pointer.val) {
                if(!pointer.right) {
                    pointer.right = node
                    return this
                }
                pointer = pointer.right
            }
        }
        return this

    }
}

let a = new Node(5)
let b = new Node(11)
let c = new Node(45)
let d = new Node(2)
let e = new Node(28)
let f = new Node(89)
let g = new Node(9)
