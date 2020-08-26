const node = require('./classes.js').module

let nodes = node.valuesToLinkedListNodes([1, 2, 3, 4, 5, 6]);

function kthToLastNode(k, head) {
  // Return the kth to last node in the linked list
  if (k < 1) return undefined;
  let current = head;
  let length = 0;

  //Traverse through list once to get length
  while (current) {
    length++;
    if (!current.next && k===1) return current;
    current = current.next;
  }
  if (k > length) return undefined;
  if (k===length) return head;

  let position = length - k;
  let index = 0;
  current = head;

  // Traverse once more
  while (index < position) {
    index++;
    current = current.next;
  }
  return current;
}

console.log(kthToLastNode(1, nodes[0]))
