import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo title="Go to GYM" description='Hey, Go to GYM 6-8' done ={false}></Todo>
    </>
  )
}

interface TodoProp{
  title:string,
  description:string,
  done: Boolean
}

function Todo(props: TodoProp){
  return <div>
    <h1>
      {props.title}
    </h1>
    <h3>
      {props.description}
    </h3>
  </div>
}
export default App
