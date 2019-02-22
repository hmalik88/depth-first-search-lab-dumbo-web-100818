function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode]
  let visited = [rootNode]
  while (stack.length !== 0) {
   let v = stack.pop()
   if (!v.discovered) {
    v.discovered = true
    findAdjacentNodes(v.name, vertices, edges).forEach(node => {
      visited.push(node)
      stack.push(node)
    })
   }
  }
  return visited;
}

function findAdjacentNodes(nodeName, vertices, edges) {
  return edges.filter(edge => {
    return edge.includes(nodeName)
  }).map(edge => {
    return edge.filter(node => node != nodeName)[0]
  }).map(name => {
    return findNode(name, vertices)
  }).filter(node => !node.discovered)
}

function findNode(nodeName, vertices) {
  return vertices.find(vertex => vertex.name === nodeName)
}
