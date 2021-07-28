import "./CellVisual.css";

const CellVisual = props => {

    let className = "cell " + props.size;
    let style = {};

    if(props.full)
        className += " full";

    if(props.drawable)
        className += " drawable";

    if(props.color){
        style = {backgroundColor: "rgb(" + props.color[0] + ", "+ props.color[1] + ", " + props.color[2] + ")"};
    }
    return <div className={className} style={style} onClick={props.cellClickHandler}></div>;
}

export default CellVisual;