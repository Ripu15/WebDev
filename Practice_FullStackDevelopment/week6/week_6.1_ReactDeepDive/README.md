A component can only return a single top level xml
because that makes it easy to do reconcillation
reconciliation: what DOM changes to be updated

npm create vite@latest: to create boiler react project
npm install: to install all dependencies for react platform
npm run dev : to run for development

Problem statement:
Create a react App that has :
- Header component that takes Title as a prop  and renders it inside a div
- The top level App component renders two headers
- Update last app to allow user to update title of first header with new title

DeepDiveReact(App.jsx)
//title as input instead of prop
//is called object destructuring

//it  include an xtra DOM element
    <>
        <button onClick={updateTitle}>Update the Title</button>
        <Header title={title}></Header>
        <Header title="harkirat2"></Header>
        <Header title="harkirat2"></Header>
        <Header title="harkirat2"></Header>
        <Header title="harkirat2"></Header>
      </div>



<> </> Doesnot include any extra DOM element

"Anytime React manipulates DOM is Re-Rendering"

By default all components are re-rendered whether static or Dynamic
//Install 'react dev tools' for chrome to visually observe it
Re-rendering means:
1. React do some work to calculate what all should be updated in this component
2. The component actaully got called
3. The inspector shows you a bounding box around the component

It happens when:
1. A state variable that is being used inside a component changes
2. A parent component re-renders triggers all children re-rendering.

You want to minimize the number of re-renders to make a highly optimal react App
The more the components that are getting re-rendered , the worse

Ways:
1. Declare state in a function instead globally
2. memo: it lets you skip re-rendering a component when its props are unchanged


ReactApp-2:
keys for every child

Wrappercomponent:
If there are lot cards on webPage,Create a wrapper Card component
that takes inner React component as an input or prop
-can take children as props for Wrapper component

Hooks:
Hooks in react are functions that allow you  to "hook into" 
React state and life-cycle features from function components
Ex : we have already used : useState
- Hooks start with use as prefix

useEffect hook says when a particular component mounts so something

Create an app that polls the sum server
Gets the current set of TODOs
And renders it on screen