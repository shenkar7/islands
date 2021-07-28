// "true" cells will change to their island number during visit

// with BFS algorithm
const markEntireIsland  = (rootX, rootY, matrix, islandNum) => {
    const queue = [];

    // marked as queued with -1 value
    matrix[rootX][rootY] = -1;
    queue.push([rootX, rootY]);

    while(queue.length !== 0){
        const cell = queue.shift();
        
        const x = cell[0];
        const y = cell[1];

        // visit this cell
        matrix[x][y] = islandNum;
        
        // add unvisited neighbours
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                const inRowBounds = (x + i >= 0 && x + i < matrix.length);
                const inColumnBounds = (y + j >= 0 && y + j < matrix[0].length);

                if(inRowBounds && inColumnBounds){
                    if(matrix[x + i][y + j] === true){
                        matrix[x + i][y + j] = -1;
                        queue.push([x + i, y + j]);
                    }
                }
            }
        }
    }
}

export const findIslands = inputMatrix => {
    let islands = 0;

    // deep copy to new matrix
    const matrix = [];
    for (let i = 0; i < inputMatrix.length; i++)
        matrix[i] = [...inputMatrix[i]];

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === true){
                islands++;
                markEntireIsland(row, col, matrix, islands);
            }
        }
    }

    return ({islandsNum: islands, matrix: matrix});
}