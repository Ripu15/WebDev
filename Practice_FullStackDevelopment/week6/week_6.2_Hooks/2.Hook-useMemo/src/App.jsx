/*
If I ask you to create an app that does two things -  
1. Increases a counter by 1 
2. Lets user put a value in an input box (n) and you need 
to show sum from 1 to n 
One restriction - everything needs to be inside App
*/ 

import { useState , useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

//without 'useMemo' it render again when button is pressed
//'useMemo' remembers previous value and do not re-render
//so, expensive operation is avoided
//memoization is very similar to caching
//final sum or 'finalcount' is returned to count
let count = useMemo(() =>{
  let finalcount = 0;
  console.log("useMemo");
  for (let i = 1; i <= inputValue; i++) {
    finalcount = finalcount + i;
  }
  return finalcount;
  },[inputValue]);

  return <div>
    {/* the value we  ut n box for sum calc, its put to the 'InputValue' state variable */}
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    {/* on button click, counter changes,so,
    App re-renders, so, the above loop will also run */}
    <button onClick={() => {
      console.log("counter");
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;