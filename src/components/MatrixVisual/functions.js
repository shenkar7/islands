export const getMatrixProperties = matrix => {
    const m = matrix.length
    const n = matrix[0].length
    
    const numberOfCells = Math.max(n, m);

    // large - 15 , medium-large - 10 , medium - 7 , medium-small - 4 , small - 2
    let cellSize = 15;

    // returns cells size depending on the larger between row or col number
    if (numberOfCells > 100){
        cellSize = 4;
    } else if(numberOfCells > 70){
        cellSize = 7;
    } else if(numberOfCells > 50){
        cellSize = 10;
    }

    const canvasWidth = m * cellSize + m + 1;
    const canvasHeight = n * cellSize + n + 1;

    return [n, m, cellSize, canvasWidth, canvasHeight];
}


export const getIslandColor = (islandsColors, cell) => {
    // if first cell of the island, create a random color
    if(!(cell in islandsColors)){
        islandsColors[cell] = [
            Math.floor(Math.random() * 150) + 50,
            Math.floor(Math.random() * 150) + 50,
            Math.floor(Math.random() * 150) + 50
        ];
    }

    return islandsColors[cell];
}


export const getCellRowColFromCanvasXY = (x, y, cellSize) => {
    const row = Math.floor((Math.round(y) - 1) / (cellSize + 1));
    const col = Math.floor((Math.round(x) - 1) / (cellSize + 1));

    return [row, col];
}