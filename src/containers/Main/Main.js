import "./Main.css";
import React, {useState} from 'react';
import Menu from './Menu/Menu';
import MatrixPage from "./MatrixPage/MatrixPage";

const Main = () => {
    
    const [page, setPage] = useState('menu'); // page = {'menu', 'randomize', 'draw'}
    const [n, setN] = useState();
    const [m, setM] = useState();

    const buttonClickHandler = (n, m, newPage) => {
        setN(n);
        setM(m);
        setPage(newPage);
    }

    let content;

    switch (page){
        case 'menu':
            content = <Menu buttonClickHandler={buttonClickHandler}/>;
            break;
        case 'randomize':
            content = <MatrixPage n={n} m={m} type="randomize" restartClickHandler={() => setPage('menu')}/>;
            break;
        case 'draw':
            content = <MatrixPage n={n} m={m} type="draw" restartClickHandler={() => setPage('menu')}/>;
            break;
        default:
            console.log("No page case was detected");
    }

    return (
        <div className="main">
            {content}
        </div>
    );
}

export default Main;