import React, {useState, useEffect} from "react";
import MatrixVisual from "../../../components/MatrixVisual/MatrixVisual";
import {createMatrix} from './createMatrix'; 
import Button from "../../../components/Button/Button";

import {findIslands} from "../findIslands";

const MatrixPage = props => {
    
    const [matrix, setMatrix] = useState(null);
    const [solved, setSolved] = useState(false);

    // create empty or random matrix
    useEffect(() => {
        if (props.type === "randomize")
            setMatrix(createMatrix(props.n, props.m, false));
        if (props.type === "draw")
            setMatrix(createMatrix(props.n, props.m, true));
    }, [props.n, props.m, props.type]);

    const solveHandler = () => {
        const solution = findIslands(matrix);

        setSolved(solution.islandsNum);
        setMatrix(solution.matrix);
    }

    //  handle cell clicks in draw mode by toggling true/false
    let cellClickHandler;

    if(props.type === "draw")   {
        cellClickHandler = (r, c) => {
            setMatrix(prevMatrix => {
                const newMatrix = [...prevMatrix];
                const newRow = [...newMatrix[r]];
                newRow[c] = !newRow[c];
                newMatrix[r] = newRow;
                return newMatrix;
            });
        }
    }

    let content;
    let solvedContent = <Button onClick={solveHandler}>SOLVE</Button>;

    if(solved !== false) {
        solvedContent = (
            <React.Fragment>
                <p>Found {solved} Islands!</p>
                <Button onClick={props.restartClickHandler}>RESTART</Button>
            </React.Fragment>
        );
    }

    if(matrix){
        content = (
            <React.Fragment>
                <MatrixVisual matrix={matrix} cellClickHandler={cellClickHandler}/>
                {solvedContent}
            </React.Fragment>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default MatrixPage;