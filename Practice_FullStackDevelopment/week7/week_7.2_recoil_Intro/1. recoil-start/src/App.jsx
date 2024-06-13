//use-case for 'recoil' is global states
//There are use-cases where 'useState' is used instead of recoil
//like input function to input in box, where state is to be used
//locally in component

//1. install recoil lib
//npm install recoil

import './App.css';
// 2. import  required APIs from recoil library
//use 'useRecoilState' if u want both value and state(curentvalue, update current value)
// so, 'useRecoilState' is equivalent to useState
import { RecoilRoot, useRecoilState, useRecoilValue , useSetRecoilState} from 'recoil';
//Atoms replaced  useState hook
//4. import the defined atoms or selectors or both in this case
import  { countAtom, evenSelector }  from "./store/atoms/count";


//App doesn't require any useState() due to recoil lib

function App() {
//5.'RecoilRoot' is used so that recoil can be used in any component 
//where-ever needed ,so, encompassing the top componenet in it
  return (
    <div>
      <RecoilRoot>
        <Count /> 
      </RecoilRoot>
         
    </div>
  )
}

{/*
  It will not re-render when RECOIL lib is used
  It re-renders when count changes, even count is not used in this func component, its PROBLEM with context API
*/}

function Count(){
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer(){
  //'useRecoilValue' if we require value
  // 6. capturing variable with state or value or both
  //so, that passing through prop could be avoided
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {(isEven %2 == 0)? "It is EVEN": null}
  </div>
}

function Buttons(){
  //useSetRecoilState- it updates the value
  //Buttons component will not re-render again
  //const [count,setCount] = useRecoilState(countAtom);
  const setCount= useSetRecoilState(countAtom);

  return <div>

    <button onClick={() =>{
      // function is passed to setCount instead of a direct value
      //The function takes the current state value as an argument
      //(count in this case) and returns the new state value.
        setCount(count => count +1);
    }}>Increase</button>

    <button onClick={() =>{
        setCount(count => count -1);
    }}>Decrease</button>

  </div>

}

export default App
