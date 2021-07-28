// "true" cells will change to their island number during visit

export const findIslands = matrix => {
    let islands = 0;

    const bfs = (rootX, rootY) => {
        islands++;
        const queue = [];

        // marked as queued with -1 value
        matrix[rootX][rootY] = -1;
        queue.push([rootX, rootY]);

        while(queue.length !== 0){
            const cell = queue.shift();
            
            const x = cell[0];
            const y = cell[1];

            // visit this cell
            matrix[x][y] = islands;
            
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

    for(let r = 0; r < matrix.length; r++){
        for(let c = 0; c < matrix[0].length; c++){
            if(matrix[r][c] === true)
                bfs(r, c);
        }
    }

    return islands;
}