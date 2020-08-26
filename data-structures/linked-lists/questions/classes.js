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

exports.module = {
    LinkedListNode,
    valuesToLinkedListNodes
}