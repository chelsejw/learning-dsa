class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return this.adjacencyList;
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item!==vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item!==vertex1);
    }

    // removeVertex(vertex){
    //     const connections = this.adjacencyList[vertex];
    //     for (let i=0; i < connections.length; i++) {
    //         this.removeEdge(vertex, connections[i]);
    //     };
    //     delete this.adjacencyList[vertex];
    //     return this.adjacencyList;
    // }

    removeVertex(vertex){
        while (this.adjacencyList[vertex].length){
            const adjVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjVertex);
        }
        delete this.adjacencyList[vertex];
    }

    DFS(start) {
        const vertices = []; //[A, B, D, ]
        const visited = {}; // {A: true, B: true, D: true}

        const helper = (vertex) => {
            const adjacentNodes = this.adjacencyList[vertex]
            if (visited[vertex]) return;

            vertices.push(vertex);
            visited[vertex] = true;

            if (adjacentNodes.length < 1) return;

            for (let i = 0; i < adjacentNodes.length; i++) {
                let neighbour = adjacentNodes[i]
                if (!visited[neighbour]) helper(neighbour);
            }
        }
        helper(start);
        return vertices;

    }

}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.adjacencyList);

console.log(graph.DFS("A"));