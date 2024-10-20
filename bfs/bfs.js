// BREADTH FIRST SEARCH
/**
 * Performs a Breadth-First Search (BFS) traversal on a graph.
 *
 * @param startNode - The node to start the BFS from.
 * @param graph - The graph to traverse, represented as an adjacency list.
 * @returns An array of nodes in the order they were visited.
 */

function Bfs(startNode, graph) {
  let queue = [startNode];
  let visited = [];

  while (queue.length > 0) {
    // select the first item/most senior item in queue
    let currentNode = queue.shift();

    // identify the direct descendant of the current node
    const children = graph[currentNode] || [];

    // the checking is to ensure we don't add undefined to the visited array
    if (currentNode) {
      visited.push(currentNode);
    }

    // add current Node child to the queue if it has not been visited
    for (const child of children) {
      if (!visited.includes(child)) {
        // add direct descendants of current Node to the queue
        queue.push(child);
      }
    }
  }
  return visited; // return the visited nodes in order of visiting them.
}

const testGraph = {
  S: ["A", "B", "C"],
  A: ["D", "E"],
  B: ["G", "F"],
  C: [],
  D: [],
  E: [],
  G: [],
  F: [],
};

const secondTestGraph = {
  0: ["3", "5", "9"],
  1: ["6", "7", "4"],
  2: ["10", "5"],
  3: ["0"],
  4: ["1", "5", "8"],
  5: ["2", "0", "4"],
  6: ["1"],
  7: ["1"],
  8: ["4"],
  9: ["0"],
  10: ["2"],
};

// Execute BFS on testgraph starting from node 'S'
console.log("BFS result for testgraph starting from 'S':");
console.log(Bfs("S", testGraph));

// Execute BFS on secondTestGraph starting from node '0'
console.log("\nBFS result for secondTestGraph starting from '0':");
console.log(Bfs("0", secondTestGraph));
