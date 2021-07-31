import React, {useEffect, useRef, useState} from 'react';
import {getMatrixProperties, getCellRowColFromCanvasXY} from './functions';
import {drawTable} from './drawTable';

const MatrixVisual = props => {

    const [eventListenerAdded, setEventListenerAdded] = useState(false);

    const [cellSize, canvasWidth, canvasHeight] = getMatrixProperties(props.matrix).slice(-3);;
    
    const canvasRef = useRef(null);

    // on each matrix update by click, draw the table again
    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // in draw mode, add only once a click event listener to the canvas
        if (props.cellClickHandler && !eventListenerAdded) {
            setEventListenerAdded(true);
            canvas.addEventListener('click', event => {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const [cellRow, cellCol] = getCellRowColFromCanvasXY(x, y, cellSize);
                props.cellClickHandler(cellRow, cellCol);
            });
        }

        drawTable(context, props.matrix);

    }, [cellSize, props, eventListenerAdded])

    return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
}

export default MatrixVisual;