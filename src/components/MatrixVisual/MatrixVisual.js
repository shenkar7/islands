import './MatrixVisual.css';
import CellVisual from './CellVisual/CellVisual';

const MatrixVisual = props => {
    
    const matrixBody = [];
    const colors = {};

    // set cells size depending on the larger between row or col number
    const MAX = Math.max(props.matrix.length, props.matrix[0].length)
    
    let size = 'large';

    if(MAX > 50)
        size = 'medium-large';

    if(MAX > 70)
        size = 'medium';

    if(MAX > 100)
        size = 'medium-small';

    if(MAX > 170)
        size = 'small';

    // create cells with correct style
    for (let r = 0; r < props.matrix.length; r++){
        const row = [];

        for(let c = 0; c < props.matrix[0].length; c++){
            
            // style of simple "false" cell
            const cellVisualProps = {"size": size};

            // add onClick option to drawable cell
            if(props.drawable){
                cellVisualProps["drawable"] = true;
                cellVisualProps["cellClickHandler"] = (() => props.drawable(r, c));
            }

            // add default color to "true" cell
            if(props.matrix[r][c] === true) 
                cellVisualProps["full"] = true;
            
            // add color if cell belongs to an island
            if(!([true, false].includes(props.matrix[r][c]))) {
                
                // if first cell of the island, create a random color
                if(!(props.matrix[r][c] in colors)){
                    const color = [
                        Math.floor(Math.random() * 150) + 50,
                        Math.floor(Math.random() * 150) + 50,
                        Math.floor(Math.random() * 150) + 50
                    ];
                    colors[props.matrix[r][c]] = color;
                }

                cellVisualProps["color"] = colors[props.matrix[r][c]];
            }
            
            row.push(<td key={r + "" + c}><CellVisual {...cellVisualProps}/></td>);
        }
        
        matrixBody.push(<tr key={r}>{row}</tr>);
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