//useRef hook gives you access to DOM element

import {  useEffect, useRef, useState } from 'react'

function App() {
  const [incomeTax, setincometax] = useState(20000);
  //divRef: This is a reference object created using useRef() in a functional component.
  //It allows you to directly interact with the DOM element
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      //You can access the DOM element directly using this reference if needed.
      // It sets current DOM element to 10
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])


  return (
    <div>
        hi there, your income tax returns are 
        <div 
          ref={divRef}>{incomeTax}
        </div>
    </div>
  )
}

export default App