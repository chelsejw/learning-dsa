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
            values.push(current.value)
            current = current.next
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
        if (this.length==0) return undefined;
        const oldHead = this.head
        this.head = this.head.next
        if (this.head) {
            this.head.prev = null;
        }
        this.length--;
        return oldHead
    }
    
    get(index){
        if (index < 0 || index > this.length - 1) return false;
        let currentIndex = 0;
        let current = this.head;
        while (currentIndex < index) {
          current = current.next;
          currentIndex++;
        }
        return current;
    }

    set(index, value) {
        let node = this.get(index);
        if (!node) {
            return false
        }
        node.value = value;
        return true;
    }
}

const createDoubleLinkedList = (arr) => {

    const list = new DoublyLinkedList();
    for (item of arr) list.push(item)
    return list;
}

let list = createDoubleLinkedList([1,2,3,4,5])
console.log(list.get(0))
console.log(list.get(1))
list.set(0, 44)
list.print();
console.log(list)