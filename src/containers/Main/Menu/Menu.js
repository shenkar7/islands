import './Menu.css';
import React, {useState} from 'react';
import Button from '../../../components/Button/Button';
import {textInputValidation} from './textInputValidation';

const Menu = props => {

    const [textInput, setTextInput] = useState("");
    const [inputError, setInputError] = useState(false);

    // Checks input validity and performs the button action
    const menuClick = value => {
        if(!textInputValidation(textInput)){
            setInputError(true);
            return;
        }
        
        const splitedInput = textInput.split(", ");

        const n = parseInt(splitedInput[0]);
        const m = parseInt(splitedInput[1]);
        props.buttonClickHandler(n, m, value);
    }

    let instructions = <p>Please enter bitmap size:</p>

    if(inputError)
        instructions = <p className="error">* Input has to be in "n, m" format. n and m between 1 to 1,000.</p>

    const content = (
        <div>
            {instructions}
            <input
                type="text"
                placeholder="Bitmap size: n, m" 
                value={textInput}
                onChange={event => setTextInput(event.target.value)}
            />
            <Button onClick={() => menuClick('randomize')}>RANDOMIZE</Button>
            <Button onClick={() => menuClick('draw')}>BONUS: DRAW</Button>
        </div>
    );

    return content;
}

export default Menu;