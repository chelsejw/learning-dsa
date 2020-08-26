//PRINCIPLE: Last in, first out;

const stack1 = [];
stack1.push("Item 1")
stack1.push("Item 2")
stack1.pop();

//Push and pop are more efficient than shift/unshift because inserting/deleting at the end of the array would not require re-indexing everything

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }

    push(value) {
        if (!value) return false;
        let newNode = new Node(value)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first;
            newNode.next = temp;
            this.first = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if (!this.first) return null //stack is empty;
        const temp = this.first
        if (this.length === 1) {
            this.last = null;
            this.first = null;
        } else {
            this.first = temp.next;
        }
        this.size--;
        return temp;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node("hello")
const stack = new Stack();
console.log(stack.push("hello"));
console.log(stack.push("there"));
console.log(stack.push("world"));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack)