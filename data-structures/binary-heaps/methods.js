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
}


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
