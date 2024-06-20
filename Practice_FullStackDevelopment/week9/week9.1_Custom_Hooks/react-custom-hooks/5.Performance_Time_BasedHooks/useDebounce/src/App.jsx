import React, { useState } from 'react';
import { useEffect } from 'react';


function useDebounce(value, timeout){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() =>{
    let timeoutNumber = setTimeout(() =>{
      setDebouncedValue(value);
    }, timeout);
 //do use 'useEffect' here to give fetch call to Backend
    return () => {
      clearTimeout(timeoutNumber);
    }
  }, [value]);
  
  return debouncedValue;
}

function App(){
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
      Debounced Value is {debouncedValue}
      <input type= "text" onChange={ e => setValue(e.target.value)}/>
    </>
  )
}


export default App;