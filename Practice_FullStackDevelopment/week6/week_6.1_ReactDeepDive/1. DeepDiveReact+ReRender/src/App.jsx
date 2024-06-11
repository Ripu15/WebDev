//npm create vite@latest-creates vite app
//select framework as React
//select language as JS
//cd project-name
//npm install- to install dependencies
//npm run dev- it runs app locally

import { useState , memo } from "react"

//Whenever button is clicked 'updateTitle' is called 'setTitle' state variable changes which comes insides App() component and
//App() re-render and its parent
//of all components, so, all components re-renders
function App() {
  const [title,setTitle] = useState("My name is Ripudaman Singh");

  //title is getting changes here
  //And updated title will be rendered dynamically in return
  //state variable changes,  its inside App which is parent of 
  //all the components,so, all of them re-renders 
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }

  return (
    //1. jsx need to one parent component at top level in return statement
    //And parent can have multipe children that are siblings
    //Returning Mutilple siblings at top level is not possible as it becomes difficult in reconciliation 
     //that is as the application grows, what DOM updates (reconcillation) needs to be done 

    //first 2 are dynamic headers, others are static
    //so, ideally only first two should re-render

    // jsx must have top-level one parent element so, all put under <div> or <> 'empty tag'
    //Because it makes reconciliation easy
   
      <div>
        {/* Just updating the title */}
        <button onClick={updateTitle}>Update the Title</button>
        {/* Rendering Header with title as argument */}
        <br></br>
        {/* Calling Header function with argument */}
        <Header title={title}></Header>
        <br></br>
        <Header title={title}></Header>
        <br></br>
        <Header title="harkirat1"></Header>
        <Header title="harkirat2"></Header>
        <Header title="harkirat3"></Header>
        <Header title="harkirat4"></Header>
        <Header title="harkirat5"></Header>
        <Header title="harkirat6"></Header>
        <Header title="harkirat7"></Header>
        <Header title="harkirat8"></Header>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
}
//Header component
//2. RE-rendering
//intall 'react developer tools' to visualise re-rendering

// For dynamic websites rule of thumb is to minimize re-rendering
//It becomes more important in native-react or when u r developing a game
//Solution
//'memo' lets u skip re-rendering when its props are unchanged
//as a result, only dynamic part changes and app re-renders and static part remains un-rendered

//argument:title = obj destructuring

//If a parent re-renders, here it re-renders as 'setTitle' changes, every component or child re-renders
//but if children are put inside 'memo', they does not re-render
const Header = memo(function Header({title}){
  return <div>
    {title}
  </div>
})

//with below function everything (static + dynamic components )renders when button is clicked
// const Header = function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

export default App
