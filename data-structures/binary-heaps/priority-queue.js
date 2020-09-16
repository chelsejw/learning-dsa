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
    dequeue() { //Remove root node.
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            let focusIndex = 0;
            let focusPriority = end.priority;
            const length = this.values.length;
            while (focusIndex < length) {
                const leftIdx = focusIndex*2+1;
                const rightIdx = focusIndex*2+2;
                let leftChild, rightChild;
                let swapIdx = null;
                if (leftIdx < length) {
                    leftChild = this.values[leftIdx];
                    if (leftChild.priority < focusPriority) {
                        swapIdx = leftIdx;
                    }
                }
                if (rightIdx < length) {
                    rightChild = this.values[rightIdx];
                    if (rightChild.priority < focusPriority && rightChild.priority < leftChild.priority || !swapIdx && rightChild.priority < focusPriority) {
                        swapIdx = rightIdx;
                    }
                }
                if (!swapIdx) break;
                this.swap(swapIdx, focusIndex);
                focusIndex = swapIdx;
            }
        }
        console.log(this.values);
        return max;
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

priorityQ.dequeue();