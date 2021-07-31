import {getIslandColor, getMatrixProperties} from './functions';

export const drawTable = (ctx, matrix) => {
        
    const [n, m, cellSize, canvasWidth, canvasHeight] = getMatrixProperties(matrix);

    // background fill behind the rectangles will look like a grid
    ctx.fillStyle = '#a7a7a7';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    let x = 1;
    let y = 1;

    const islandsColors = {};

    // draw cells with correct style
    for (let rowIndex = 0; rowIndex < m; rowIndex++){
        for(let colIndex = 0; colIndex < n; colIndex++){
            const cell = matrix[rowIndex][colIndex]
            
            if (cell === true) {
                ctx.fillStyle = 'gray';
                ctx.fillRect(x, y, cellSize, cellSize);
            }
            else if (cell === false) {
                ctx.fillStyle = 'white';
                ctx.fillRect(x, y, cellSize, cellSize);
            }
            else {
                // draw a colored cell as part of an island
                const [r, g, b] = getIslandColor(islandsColors, cell);
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fillRect(x, y, cellSize, cellSize);
            }

            x += cellSize + 1;
        }

        y += cellSize + 1;
        x = 1
    }

}