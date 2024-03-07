# Weird error of returning multiple answers
visited = {}
depth = 0

def cloneNode(self, node, parent):
    global visited
    global depth
    depth += 1
    newNode = UndirectedGraphNode(node.label)
    visited[newNode.label] = newNode
    # print (depth)
    # print (newNode.label)
    # print ("children")
    for child in node.neighbors:
        # print (child.label)
        if (child.label == node.label):
            newNode.neighbors.append(newNode)
        elif (parent is not None and child.label == parent.label):
            newNode.neighbors.append(parent)
        elif (child.label in visited):
            newNode.neighbors.append(visited[child.label])
        else:
            newChild = cloneNode(self, child, newNode)
            newNode.neighbors.append(newChild)
    depth -= 1
    return newNode

class Solution:
    # @param node, a undirected graph node
    # @return a undirected graph node        
    
    def cloneGraph(self, node):
      global visited
      visited = {}
      depth = 0
      return cloneNode(self, node, None)
