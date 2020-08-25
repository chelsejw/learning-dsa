
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
           /* Basically: Remove the last item from the list, and update the tail values
    
            - Edge case: no items in list, return undefined.
            - Have two variables - current vs previous
            - Previous is null, current is this.head
                - Edge case: No nodes
                    - If list.length==0; return undefined
            - While the current node's next value is not null,
                - If this is the tail node, 1) set this.tail = previous, THEN this.tail.next = null, and then this.length--
                - Edge case: only one item in list
                    - Then the HEAD should be = null as well
                    - And no need to update the tail node's next value, because tail node would be null.
                - If it is NOT the tail node, set previous = current, THEN current = current.next
        */

        // List with no items.
        if (this.length == 0 || !this.head) return undefined
        let current = this.head;
        let previous = current;

        /* This while loop will not run when there is only one item in the list.
         Because current.next would be null*/

        while (current.next) {
            previous = current;
            current = current.next;
            /* ATTEMPT 1
                if (current == this.tail) {
                this.tail = previous;
                //Edge case: there was only one item in list, so the tail node is now null.
                if (!this.tail) {
                    this.head = null;
                    //If not, the head value should be the same, and we can assign null to the tail node's next value.
                } else {
                    this.tail.next = null;
                }
                this.length--;
                return current;
                }
                previous = current;
                current = current.next;
                }
            */
        }
        
        this.length--;

        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = previous;
            this.tail.next = null;
        }

        return current;
    }

    shift() { // Function: To remove the first node of the linked list
        if (this.length==0) return undefined;
        let oldHead = this.head
        this.head = this.head.next;
        this.length--;
        if (!this.head) this.tail = null;
        return oldHead
    }

    unshift(value) { // Function: to add a new node to the beginning of the linked list.
        if (this.length==0) {
            this.push(value);
            return this;
        }
        /* The new node's next value should point to the current head.
        Set head to new node.
        */
       let newNode = new Node(value);
       newNode.next = this.head
       this.head = newNode;
       this.length++;
       return this;
    }

    //Hello there my name is Chelsea
    //  0    1    2    3   4    5

    get(index) { // Function: To return the node at a certain position
        if (index < 0 || index > this.length-1) return null;
        let currentPosition = 0;
        let currentNode = this.head;
        while (currentPosition < index) {
            currentNode = currentNode.next;
            currentPosition++;
        }
        return currentNode;
    }

    set(index, newValue) { //Change value of a node at a specified index
        if (index < 0 || index > this.length - 1) return null;
        let node = this.get(index);
        node.value = newValue
        return this;
    }

}

const makeLinkedList = (sentence) => {
    if (!sentence) return new SinglyLinkedList();
    let list = new SinglyLinkedList();
    const words = sentence.split(" ")
    for (word of words) list.push(word)
    return list
}

module.exports = {
    Node,
    SinglyLinkedList,
    makeLinkedList
}