class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function valuesToLinkedListNodes(values) {
    const nodes = [];
    for (let i = 0; i < values.length; i++) {
        const node = new LinkedListNode(values[i]);
        if (i > 0) {
            nodes[i - 1].next = node;
        }
        nodes.push(node);
    }
    return nodes;
}

let nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5, 6]);


function reverse(headOfList) {
    // Reverse the linked list in place
    if (!headOfList || !headOfList.next) return headOfList;

    let current = headOfList;
    let second = current.next;
    while (second) {
        let third = second.next;
        second.next = current;
        current = second;
        second = third;
    }
    headOfList.next = null;
    return current;
}

console.log(reverse(nodes[0]))
console.log(nodes)