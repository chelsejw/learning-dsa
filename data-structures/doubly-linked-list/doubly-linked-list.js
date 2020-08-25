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

    pop(){
        if (this.length===0 || !this.head) return undefined
        let removedNode = this.tail;
        if (this.length===1) {
            this.head = null;
            this.tail = null;
        } else {
            let newLast = this.tail.prev;
            newLast.next = null;
            this.tail = newLast;
        }
        this.length--;
        return removedNode
    }
    

    shift() {
        //The new head = currentHead.next 
        //New head's previous value should be null;
        if (this.length==0) return undefined;
        const oldHead = this.head
        this.head = this.head.next
        //If there is a next node after removing the old one, set its previous value to be null
        if (this.head) {
            this.head.prev = null;
        //If there are no more nodes (this.head===null)
        } else {
            this.tail = null;
        }
        this.length--;
        return oldHead
    }

    unshift(value) {
        const newNode = new Node(value);

        if (this.length===0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    } 
    
    get(index){
        if (index < 0 || index >=this.length) return null;
        const half = Math.floor(this.length/2) 
        let currentIndex;
        let current;
        if (index <= half) {
            currentIndex = 0;
            current = this.head;
            while (currentIndex < index) { 
                current = current.next;
                currentIndex++;
            }
        } else if (index > half) {
            currentIndex = this.length-1;
            current = this.tail;
            while (currentIndex > index) {
              current = current.prev;
              currentIndex--;
            }
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

let list = createDoubleLinkedList([1,2,3,4,5,6,7,8,9,10])
console.log(list.get(6))