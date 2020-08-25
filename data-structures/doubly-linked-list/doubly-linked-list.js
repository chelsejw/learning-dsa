class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print(){
        let values = []
        let current = this.head
        while (current) {
            values.push({
                value: current.value,
                next: current.next,
                prev: current.prev
            })
            current = current.next;
        }
        return console.log(values)
    }

    push(value) {
        let node = new Node(value)
        if (this.length == 0) {
          this.head = node;
          this.tail = node;
        } else {
          node.prev = this.tail; // New node's previous value should be the current tail
          this.tail.next = node; // The current tail's next value should be the new node
          this.tail = node; // The new tail should be the new node
        }
        this.length++;
        return this;
    }

    shift() {
        //The new head = currentHead.next 
        //New head's previous value should be null;
        const oldHead = this.head
        this.head = this.head.next
        this.head.prev = null;
        this.length--;
        return oldHead
    }
}

const createDoubleLinkedList = (arr) => {

    const list = new DoublyLinkedList();
    for (item of arr) list.push(item)
    return list;
}

let list = createDoubleLinkedList([1,2,5,6])
const shift = list.shift()
list.print();

console.log(`Removed node`, shift)