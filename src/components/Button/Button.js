import './Button.css';

const Button = props => {
    return (
        <div className="button">
            <button onClick={props.onClick}>{props.children}</button>
        </div>
    );
}

export default Button;