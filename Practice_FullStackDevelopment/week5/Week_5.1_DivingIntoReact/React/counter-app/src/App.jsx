import { useState } from "react";

function App() {
  //defining initial state
  //setCount is func, it dispatches something that re-renders DOM
  //or setCount is state updater
  const [count, setCount] = useState(0); 

  //returning dynamic HTML
  return (
      <div>-+1
        {/* 'count = {count} setCount = {setCount}' are arguments to func */}
          {/* so, calling 'CustomButton' func with arguments */}
          {/* whenever u want to render something in react Component , u need put it inside curly braces */ }
          <CustomButton count = {count} setCount = {setCount}></CustomButton>
          {/* <CustomButton count = {count + 1} setCount = {setCount}></CustomButton>
          <CustomButton count = {count + 2} setCount = {setCount}></CustomButton>
          <CustomButton count = {count + 3} setCount = {setCount}></CustomButton>
          <CustomButton count = {count + 4} setCount = {setCount}></CustomButton> */}
      </div>
  )
}

// Its a func but effectively its a Component
function CustomButton(props) {
//updating state
  function onClickHandler() {
    //setting  count+1 with setCount
    props.setCount(props.count+1);
  }
//onclicking the button it should update the state
//and then render it 
  return <button onClick={onClickHandler}>
    {/* Now incremented count is rendered */}
    Counter {props.count}
  </button>
}

export default App
