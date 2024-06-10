//importing the useState hook 
import {useState} from "react";

//root component 'App'
function App() {
  //defining initial state
  //state is an array of multiple todos
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "Gym timmings 7-9 am",
    completed:false
  },{
    title: "Study DSA",
    description: "DSA timmings 10-12 am",
    completed:true
  }]); 

//Adding more todos to the state
  function addTodo(){
    // (...todos)Old todos + new todos
    setTodos([...todos,{
      title:"New Todo",
      description:"Desc of New todo"
    }])
  }
//return statement of parent component 'App'
  return (
    <div>
    {/* calling 'addTodo' func when button is clicked */}
      <button onClick={addTodo}>Add a new todo</button>  
      {/* adding loop to render all todos by calling func 'Todo'  */}
      {/* title = {todo.title} description={todo.description} are args */}
      {todos.map(function(todo){  
          return <Todo title = {todo.title} description={todo.description} />
      })}
    
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
