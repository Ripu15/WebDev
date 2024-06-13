//What is reducer, useReducer
//Context API
{/*Prop drilling makes the code unappealing visually or unreadable or syntactical tough 
Context API solves this problem
-Its a way "teleport" data to components in the tree that needs it 
without  passing props
*/}
{/*
Problem with Context API:
- It does not fix re-rendering
-It only fixes prop drilling
*/}
import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)
//need to wrap variable inside provider that wants to use teleporter
//'value' is what that we want to access without passing it as prop
{/*
  Wrap  any component that requires it 
*/}
  return (
    <div>
      <CountContext.Provider value= {count}>
         <Count setCount={setCount}/>
      </CountContext.Provider>   
    </div>
  )
}

{/* passed setCount but not by this function
It is used by Buttons component/function 
But we need to directly teleport it to the final component
Context API*/}

function Count({count, setCount}){
  return <div>
    <CountRenderer />
    <Buttons count={count} setCount={setCount}/>
  </div>
}

function CountRenderer(){
  //to use count value here inside it without being pased as prop
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}){
  //to use count value here inside it without being pased as prop
  const count = useContext(CountContext);
  return <div>

    <button onClick={() =>{
        setCount(count +1);
    }}>Increase</button>

    <button onClick={() =>{
        setCount(count -1);
    }}>Decrease</button>

  </div>

}

export default App
