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
        this.values[0] = end;
        const swap = (idx1, idx2) => {
            const temp = this.values[idx1];
            this.values[idx1] = this.values[idx2];
            this.values[idx2] = temp;
            return;
        }

        let parentIndex = 0;

        while (parentIndex < this.values.length-1) {
            let newRoot = this.values[parentIndex];
            let leftChildIdx = parentIndex*2+1
            let rightChildIdx = parentIndex*2+2
            let leftChild = this.values[leftChildIdx];
            let rightChild = this.values[rightChildIdx];
            console.log(newRoot)
            if (leftChild > newRoot && rightChild > newRoot) {
              if (leftChild > rightChild) {
                swap(leftChildIdx, parentIndex);
                parentIndex = leftChildIdx;
              } else {
                swap(rightChildIdx, parentIndex);
                parentIndex = rightChildIdx;
              }
            } else if (leftChild > newRoot) {
              swap(leftChildIdx, parentIndex);
              parentIndex = leftChildIdx;
            } else if (rightChild > newRoot) {
              swap(rightChildIdx, parentIndex);
              parentIndex = rightChildIdx;
            } else {
              break;
            };            
        };
        console.log(this.values);
        return max;
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