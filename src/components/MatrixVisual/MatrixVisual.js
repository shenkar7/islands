import './MatrixVisual.css';
import CellVisual from './CellVisual/CellVisual';

const MatrixVisual = props => {
    
    const matrixBody = [];
    const colors = {};

    // set cells size depending on the larger between row or col number
    const numberOfCells = Math.max(props.matrix.length, props.matrix[0].length)
    
    let size = 'large';

    if (numberOfCells > 170){
        size = 'small';
    } else if (numberOfCells > 100){
        size = 'medium-small';
    } else if(numberOfCells > 70){
        size = 'medium';
    } else if(numberOfCells > 50){
        size = 'medium-large';
    }

    // create cells with correct style
    for (let rowIndex = 0; rowIndex < props.matrix.length; rowIndex++){
        const row = [];

        for(let colIndex = 0; colIndex < props.matrix[0].length; colIndex++){
            
            // style of simple "false" cell
            const cellVisualProps = {"size": size};

            // add onClick option to drawable cell
            if(props.drawable){
                cellVisualProps["drawable"] = true;
                cellVisualProps["cellClickHandler"] = (() => props.drawable(rowIndex, colIndex));
            }

            // add default color to "true" cell
            if(props.matrix[rowIndex][colIndex] === true) 
                cellVisualProps["full"] = true;
            
            // add color if cell belongs to an island
            if(!([true, false].includes(props.matrix[rowIndex][colIndex]))) {
                
                // if first cell of the island, create a random color
                if(!(props.matrix[rowIndex][colIndex] in colors)){
                    const color = [
                        Math.floor(Math.random() * 150) + 50,
                        Math.floor(Math.random() * 150) + 50,
                        Math.floor(Math.random() * 150) + 50
                    ];
                    colors[props.matrix[rowIndex][colIndex]] = color;
                }

                cellVisualProps["color"] = colors[props.matrix[rowIndex][colIndex]];
            }
            
            row.push(<td key={`${rowIndex}  ${colIndex}`}><CellVisual {...cellVisualProps}/></td>);
        }
        
        matrixBody.push(<tr key={rowIndex}>{row}</tr>);
    }

    return (
        <table className="table">
            <tbody>
                {matrixBody}
            </tbody>
        </table>
    );
}

export default MatrixVisual;