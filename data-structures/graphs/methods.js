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

    removeVertex(vertex){
        const connections = this.adjacencyList[vertex];
        for (let i=0; i < connections.length; i++) {
            this.removeEdge(vertex, connections[i]);
        };
        delete this.adjacencyList[vertex];
        return this.adjacencyList;
    }

}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Berlin");
graph.addVertex("Moscow");
console.log(graph.adjacencyList);

graph.addEdge("Berlin", "Moscow");
graph.addEdge("Berlin", "Tokyo");
console.log(graph.adjacencyList);

graph.removeVertex("Moscow");
console.log(graph.adjacencyList);