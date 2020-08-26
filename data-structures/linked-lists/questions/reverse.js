class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function reverse(headOfList) {
  // Reverse the linked list in place
  let current = headOfList;
  let second = current.next;
  while (second.next) {
    let third = second.next;
    second.next = current;
    current = second;
    second = third; 
  }
  headOfList.next = null;
  return headOfList;
}
