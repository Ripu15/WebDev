import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. 
// When the component mounts or the button is clicked, 
// automatically focus the text input field using useRef.

export function Assignment1() {

    //using 'useRef'
    const inputRef = useRef();
    
    //by default focus is put to the current input box
    useEffect(() => {
        inputRef.current.focus() 
    }, [inputRef]);

    // on button click below func put focus to input box using 'inputRef' object
    const handleButtonClick = () => {
        inputRef.current.focus()
    };

    return (
        //component with a text input field and a button.
        <div>
            {/* taking inputRef as input in box from user */}
            <input ref={inputRef} type="text" placeholder="Enter text here" />
            {/* on clicking the button 'handleButtonClick' func is called */}
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
