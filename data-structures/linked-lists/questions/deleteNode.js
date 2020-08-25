class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(nodeToDelete) {
  // Delete the input node from the linked list
  // [1, 5, 6, 7, 8]

  //nodeToDelete = {6, next: 7}

  const nextNode = nodeToDelete.next; // {7, next: 8)
  if (nextNode) {
    nodeToDelete.next = nextNode.next;
    nodeToDelete.value = nextNode.value;
  } else {
    return false;
  }
}
