class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(value) {
        this.values.push(value); //Add value to the heap.
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentVal = this.values[parentIndex]
            if (element <= parentVal) break;
            this.values[parentIndex] = element;
            this.values[index] = parentVal;
            index = parentIndex; 
        }
        console.log(this.values)
        return this.values
    }

    removeRoot() {
        const max = this.values[0]; //Previous max
        const end = this.values.pop();
        if (this.values.length > 0) this.values[0] = end;
        this.sinkDown();
        return max;
    }

    sinkDown() {
        const swap = (idx1, idx2) => {
            const temp = this.values[idx1];
            this.values[idx1] = this.values[idx2];
            this.values[idx2] = temp;
            return;
        }

        let parentIdx = 0;
        const length = this.values.length;
        let element = this.values[parentIdx];

        while (true) {
            let swapIdx = null;
            let leftIdx = parentIdx * 2 + 1;
            let rightIdx = parentIdx * 2 + 2;
            let leftChild, rightChild;
            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild > element) swapIdx = leftIdx;
            }
            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if (!swap && rightChild > element || swap && rightChild > leftChild) {
                  swapIdx = rightIdx
                }
            }
            if (!swapIdx) break;
            swap(swapIdx, parentIdx);
            parentIdx = swapIdx;
        }
        return console.log(this.values);

    }
}


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.removeRoot())
