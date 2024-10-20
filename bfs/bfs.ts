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
      const flatChildren = graph[currentNode] || [];

      // add direct descendants of current Node to the queue
      queue = [...queue, ...flatChildren];

      // add current Node to the visited array/list if it is not already visited
      if (!visited.includes(currentNode)) {
        visited.push(currentNode);
      }
    }
  }
  return visited; // return the visited nodes in order of visiting them.
}

// Test graphs
const TsTestGraph: IAdjacencyList = {
  "5": ["3", "7"],
  "3": ["2", "4"],
  "7": ["8"],
  "2": [],
  "4": ["8"],
  "8": [],
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
console.log(TsBfs("5", testGraph));
console.log(TsBfs("0", secondTestGraph));
