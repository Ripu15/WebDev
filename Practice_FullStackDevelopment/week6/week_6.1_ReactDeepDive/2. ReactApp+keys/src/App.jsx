import { useState } from 'react'
//key or ids for new todos
// a special string attribute you need to include when 
//creating lists of elements in React
//to identify which items in the list are changed, updated, or deleted
//as it uniquely identifies a particular element in list
let count = 4;

function App() {
  //2. state array initialization
  const [todos, setTodos] = useState([{
    id:1,
    title: "go to GYM",
    description: "go to GYM Today"
  },{
    id:2,
    title: "eat food",
    description: "eat Food Today"
  },{
    id:3,
    title: "go to Class",
    description: "go to Class Today"
  }
])
//4.Adding new components
function addTodo(){
  const newTodos = [];
  // iterating over old todos
  for(let i=0;i<todos.length;i++)
  {
    newTodos.push(todos[i]);
  }
  //pushing new todo to the newTodos array 
  newTodos.push({
    id: count++,
    title: Math.random(),
    description: Math.random()
  })
  //Now old todos got replaced to newTodos
  setTodos(newTodos);
}

//{todos.map(todos=> <Todo key = {todos.id} title={todos.title} description={todos.description}/>)}
//key added unique id for each todo
//All rendering happens here that is in 'return'
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {/* //3. */}
      {/* For rendering every todo calling 'Todo' with arguments  using 'map'*/}
      {/* Need to give every element a unique key */}
      {/* keys uniquely identifies a particular todo */}
      {/* if keys are NOT specified 'react' will remove everything and re-add , it will shoots up the re-rendering*/}
      {todos.map(todos=> <Todo key = {todos.id} title={todos.title} description={todos.description}/>)}
    </div>
    )
}
// 1. Todo component creation
//it takes title and description as input args
function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
