
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
           if (this.length == 0 || !this.head) {
             return undefined;
           }
           let current = this.head;
           let previous = null;

           while (current) {
             if (current == this.tail) {
               const lastNode = this.tail;
               this.tail = previous;
               //Edge case: there was only one item in list, so the tail node is now null.
               if (!this.tail) {
                 this.head = null;
                 //If not, the head value should be the same, and we can assign null to the tail node's next value.
               } else {
                 this.tail.next = null;
               }
               this.length--;
               return lastNode;
             }
             previous = current;
             current = current.next;
           }
         }
}

const makeStringLinkedList = (sentence) => {
    let list = new SinglyLinkedList();
    const words = sentence.split(" ")
    for (word of words) list.push(word)
    return list
}

const list = makeStringLinkedList("Hello baby")
list.traverse()
let lastItem = list.pop()
console.log(`Last item is`, lastItem)
console.log(`Updated list:`)
console.log(list)