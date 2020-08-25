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

  class Runner {
      constructor(type, node) {
          this.type = type;
          this.node = node;
      }

      run(){
          if (this.type=='fast') {
              this.node = this.node.next.next
          } else {
              this.node = this.node.next
          }
          return this
        }
    }
    const firstRunner = new Runner('fast', firstNode)
    const secondRunner = new Runner('slow', firstNode);
    // console.log(`First runner's node is now`, firstRunner.node);
    // console.log(`second runner's node is now`, secondRunner.node);

    //while firstRunner hasn't reached the end of a list
    while (firstRunner.node || firstRunner.node.next) {
        firstRunner.run();
        secondRunner.run();

        // console.log(`After a run, first runner's node is now`, firstRunner.node)
        // console.log(`After a run, second runner's node is now`, secondRunner.node);
        if (!firstRunner.node) return false
        if (firstRunner.node==secondRunner.node) return true;
    }
    return false
}

console.log(containsCycle(nodes[0]))

