import React, { useState } from 'react';
import { useRef } from 'react';

//do not use global variables in React

// Create a component that tracks and displays the number of times it has been rendered. 

export function Assignment2() {
    const [count, setCount] = useState(0);
    //use 'useRef' for variable that is independent(persistent) across re-renders, that is it will not re-initialized to zero again on re-render
    const numberOfTimesReRendered = useRef(0);
    //This can be over-ridden
    //const numberOfTimesReRendered = 0;

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };

    numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfTimesReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};