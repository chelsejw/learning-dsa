const node = require('./classes.js').module

let nodes = node.valuesToLinkedListNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// NODE THAT WILL BE RETURNED according to k
// nodes: [ 1 , 2 , 3 , 4 , 5 , 6 ]
// k:     [ 6,  5,  4,  3,  2,  1 ]

function kthToLastNode(k, head) {
  // Return the kth to last node in the linked list
  if (k < 1) return null;
  let current = head;
  let length = 0;

  //Traverse through list once to get length
  while (current) {
    length++;
    if (k===1 && !current.next) return current;
    current = current.next;
  }
  if (k > length) return null;
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
