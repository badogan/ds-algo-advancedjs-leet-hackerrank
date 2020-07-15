// set of values related in a pair-wise fashion
//   Node ==== vertex
//   Nodes are connected with edges
//   Graphs include trees and linked Lists
//   DIRECTED vs UNDIRECTED
//   WEIGHTED vs UNWEIGHTED (when there is a value in the edges)
//   CYCLIC vs ACYCLIC

//Good:
//Relationships
// Good for algorithms

//Bad:
//Scaling is hard - big company needed! Neo4j

//Edge List
const graphEdgeList = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
  ];
  //Adjecent List - index is the node, value is the nodes neighbours
  const graphAdjecentList = [[2], [2, 3], [0, 1, 3], [1, 2]];
  //Adjacent MAtrix
  const graphAdjacentMatrix = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1]
  };
  
  class Graph {
    constructor() {
      this.numberOfNodes = 0;
      this.adjacentList = {};
    }
    addVertex(node) {
      this.adjacentList[node] = [];
      this.numberOfNodes += 1;
      return this;
    }
    addEdge(node1, node2) {
      //undirected Graph
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
      return this;
    }
    showConnections() {
      const allNodes = Object.keys(this.adjacentList);
      for (let node of allNodes) {
        let nodeConnections = this.adjacentList[node];
        let connections = "";
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        }
        console.log(node + "-->" + connections);
      }
    }
  }
  
  // const myGraph = new Graph();