class MinHeap {
    constructor(){
        this.values = [];
    }

    swap(idx1, idx2) {
        const temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    }

    enqueue(value, priority){
        const node = new HeapNode(value, priority);
        this.values.push(node);
        let index = this.values.length-1;
        while (index > 0) {
            let parentIdx = Math.floor((index-1)/2);
            let parentPriority = this.values[parentIdx].priority;
            if (node.priority < parentPriority) {
                this.swap(index, parentIdx);
                console.log(`Did Swap`)
                index = parentIdx;
            } else {
                break;
            }
        }; 
        console.log(this.values);
        return this.values;
    }

    bubbleDown(){

    }

}

class HeapNode {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

const priorityQ = new MinHeap();
priorityQ.enqueue("fever", 3);
priorityQ.enqueue("car accident", 1);
priorityQ.enqueue("headache", 4);
