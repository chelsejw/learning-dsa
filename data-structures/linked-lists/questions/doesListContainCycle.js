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

let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
console.log(nodes)
function containsCycle(firstNode) {
  //If there is no next node, there is no cycle
  if (!firstNode || !firstNode.next) return false;

    const firstRunner = firstNode
    const secondRunner = firstNode

    //while firstRunner hasn't reached the end of a list
    while (firstRunner && firstRunner.next) {
        firstRunner = firstRunner.next.next
        secondRunner = secondRunner.next

        // console.log(`After a run, first runner's node is now`, firstRunner.node)
        // console.log(`After a run, second runner's node is now`, secondRunner.node);
        if (firstRunner==secondRunner) return true;
    }
    return false
}

console.log(containsCycle(nodes[0]))

