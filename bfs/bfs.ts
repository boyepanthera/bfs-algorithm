interface IAdjacencyList {
  [key: string]: string[]; // the key is the node, and the value is an array of its direct descendants.
}

function TsBfs(startNode: string, graph: IAdjacencyList): string[] {
  let queue: string[] = [startNode];
  let visited: string[] = [];

  while (queue.length > 0) {
    // select the first item/most senior item in queue
    const currentNode = queue.shift();

    // Check if currentNode is defined before using it
    if (currentNode !== undefined) {
      // identify the direct descendants of the current node
      const children = graph[currentNode] || [];

      visited.push(currentNode);

      // add current Node to the queue if not already visited
      for (const child of children) {
        if (!visited.includes(child)) {
          queue.push(child);
        }
      }
    }
  }
  return visited; // return the visited nodes in order of visiting them.
}

// Test graphs
const TsTestGraph: IAdjacencyList = {
  S: ["A", "B", "C"],
  A: ["D", "E"],
  B: ["G", "F"],
  C: [],
  D: [],
  E: [],
  G: [],
  F: [],
};

const TsSecondTestGraph: IAdjacencyList = {
  "0": ["3", "5", "9"],
  "1": ["6", "7", "4"],
  "2": ["10", "5"],
  "3": ["0"],
  "4": ["1", "5", "8"],
  "5": ["2", "0", "4"],
  "6": ["1"],
  "7": ["1"],
  "8": ["4"],
  "9": ["0"],
  "10": ["2"],
};

// Example usage
// Execute BFS on testgraph starting from node 'S'
console.log("BFS Ts result for TsTestgraph starting from 'S':");
console.log(TsBfs("S", TsTestGraph));

// Execute BFS on secondTestGraph starting from node '0'
console.log("\nBFS result for TsSecondTestGraph starting from '0':");
console.log(TsBfs("0", TsSecondTestGraph));
