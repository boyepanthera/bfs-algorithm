/**
 * Performs a Breadth-First Search (BFS) traversal on a graph.
 *
 * @param startNode - The node to start the BFS from.
 * @param graph - The graph to traverse, represented as an adjacency list.
 * @returns An array of nodes in the order they were visited.
 */

function OptimisedBfs(startNode, graph) {
  // Initialize the queue with the start node
  const queue = [startNode];

  // Use a Set for O(1) lookup time when checking visited nodes
  const visited = new Set();

  // Continue BFS while there are nodes in the queue
  while (queue.length > 0) {
    // Remove and get the first node from the queue
    const currentNode = queue.shift();

    // Skip if the node is undefined (shouldn't happen) or already visited
    // this is needed to avoid infinite adding of nodes when the tree/node/ Adjacency list is cyclic
    if (currentNode === undefined || visited.has(currentNode)) continue;

    // Mark the current node as visited
    visited.add(currentNode);

    // Get children of the current node, or an empty array if the node isn't in the graph
    const children = graph[currentNode] || [];

    // Add unvisited children to the queue
    for (const child of children) {
      if (!visited.has(child)) {
        queue.push(child);
      }
    }
  }

  // Convert the Set of visited nodes back to an array and return
  return Array.from(visited);
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

const secondTestGraphOpt = {
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
console.log("BFS.js optimised result for testGraph starting from 'S':");
console.log(OptimisedBfs("S", testGraph));

// Execute BFS on testgraph starting from node '0'
console.log("BFS.js optimised result for testGraph starting from 'S':");
console.log(OptimisedBfs("0", secondTestGraphOpt));
