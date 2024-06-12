import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. 
// Pass these functions to a child component which has buttons to perform the 
// increment and decrement actions. Use useCallback to ensure that these functions
// are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    //below two funcs are using 'useCallback' so, will not change across re-render
    const handleIncrement = useCallback(() => {
        //'currentCount' is being accessed from here, instead from state
        //Its better beccause it removes dependency from 'count' state var , so, no need to mention it in dependency array
        setCount(function(currentCount) {
            return currentCount + 1;
        })
    }, [])
//'setCount(count => count - 1 )' is same as 'setCount(function(currentCount) {return currentCount + 1;})'

    const handleDecrement = useCallback(() => {
        setCount(count => count - 1 );
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};
//by using 'memo' below children will not re-render when on increment or decrement as parent state changes
//Below child component should not re-render
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
