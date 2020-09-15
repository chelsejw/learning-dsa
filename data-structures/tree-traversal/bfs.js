const BFS = (root) => {
    const queue = []
    const values = []
    queue.push(root)
    
    while (queue.length>1) { //while queue is not empty
        let latest = queue.shift()
        values.push(latest.value)
        if (latest.left) {
            queue.push(latest.left)
        }
        if (latest.right) {
            queue.push(latest.right)
        }
    }
    return values
}