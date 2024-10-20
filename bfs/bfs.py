def breadth_first_search(graph, start_node):
    # Initialize an empty list to store the visited nodes and a queue to hold the nodes to visit
    visited = []
    queue = [start_node]

    # Write a while loop so far there are elements in queue list
    while queue:
        current_node = queue.pop(0) # Get the current node by removing from first element in queue list
        visited.append(current_node) # Add current node to visited list
        for node in graph[current_node]: # Add all children of current node to queue
            if node not in visited:
                queue.append(node)
    return visited


test_graph = {
  'S': ["A", "B", "C"],
  'A': ["D", "E"],
  'B': ["G", "F"],
  'C': [],
  'D': [],
  'E': [],
  'G': [],
  'F': [],
};

second_graph = {
    '0' : ['3', '5' , '9'],
    '1' : ['6', '7', '4'],
    '2' : ['10', '5'],
    '3' : ['0'],
    '4' : ['1', '5', '8'],
    '5' : ['2', '0', '4'],
    '6': ['1'],
    '7': ['1'],
    '8': ['4'],
    '9': ['0'],
    '10': ['2'],
}

print(breadth_first_search(test_graph, 'S'))
print(breadth_first_search(second_graph, '0'))