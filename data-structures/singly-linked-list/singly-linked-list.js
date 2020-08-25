
// Define the Node class.

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value)

        //If the list has no head yet -- it's empty. Set the new node to be the tail and head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        
        //Else, the list is not empty. Assign new node to the current tail first, then change the tail to new node. 
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this
    }

    traverse(){
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }

    pop(){
        let current = this.head

        /* Find the second to last node, where it's next node is the tail node
            - Have two variables - current vs previous
            - Previous is null, current is this.head
                - Edge case: One value in list
                    - If current.next==null, means there is only one value.
                    - return this.head = null;
            - While the current node's next value is not null,
                - If this is the tail node, 1) set this.tail = previous, THEN this.tail.next = null
        */

        
                
    }
}

const makeStringLinkedList = (sentence) => {
    let list = new SinglyLinkedList();
    const words = sentence.split(" ")
    for (word of words) list.push(word)
    return list
}

const list = makeStringLinkedList("Hello, my name is Chelsea and I'm tryna do some DATA STRUCTURES, man.")

list.traverse()