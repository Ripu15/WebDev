import React, { useState, useEffect } from 'react';
import './App.css'

  function App() {
    const [render,setRender] = useState(true);
    //Life cycle events using useEffect
    //Here the componenet will render(mount) for 3s, then unmounts
    useEffect(() =>{
      setTimeout(() => {
        // setRender(false);
        setRender(r => !r);
      },3000)
    },[])

    return (
      <>
        {render ? <MyComponent/> : <div>I am second div: means component got UNMOUNTED!!!, I am getting displayed after 3 seconds ...  </div>}
    
      </>
    )
  }

function MyComponent() {
  //when component mounts for first time first line will execute
  //2nd time component mount second line will execute and then first will
  //if component unmounts then only second line will execute
  useEffect(() => {
    console.error("Component get MOUNTED !!! ");
    //you can return only a func from within 'useEffect'
    return () => {
      console.log("Component get UNMOUNTED !!! ");
    };
  }, []);
 return <div>
  {/* mount and unmount of component is shown by below code */}
   From inside the component...
 </div>
  // Render UI
}

export default App
