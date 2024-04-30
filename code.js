function convertToAdjList(adjMatrix) {
    let adjList = [];
    let vertices = adjMatrix.length;
    for (let i = 0; i < vertices; i++) {
        let surroundings = [];
        for (let j = 0; j < vertices; j++) {
            if (adjMatrix[i][j] === 1) {
                surroundings.push(j);
            }
        }
        adjList.push(surroundings);
    }
    return adjList;
}
