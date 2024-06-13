{/*Prop drilling makes the code visually unappealing  or unreadable or syntactical tough */}

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count}/>
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}
//If putting 'Button' component is put inside Count component ,in that case we need to give 'setCount' as prop to 'Count' as 'Buttons' component needs it, even if it('Count')does not require it, here code starts to become ugly
//Its called as prop drilling

function Count({count}){
  return <div>
    {count}
    {/* <Buttons count={count} setCount={setCount}/> */}
  </div>
}

function Buttons({count, setCount}){
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
