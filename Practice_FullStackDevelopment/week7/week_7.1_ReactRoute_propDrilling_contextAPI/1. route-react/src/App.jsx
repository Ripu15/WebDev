//npm install react-router-dom

//Lazy routing takes care of receiving only info or code need for a paticular page
//means receivng website incrementally instead in one go
//optimized client side routing
{/*suspense API - async component fetching , async data fetching */}

//You can NOT use 'lazy' without 'Suspense' for async data fetching

import { Suspense, lazy } from "react"
{/*useNavigate is hook for client side routing
useNavigate hook takes care that NOT to hard reload the page or doesnot re-fetch it from BE*/ }
import { BrowserRouter, Routes, Route , useNavigate }  from 'react-router-dom'
import './App.css'
//wrap your component(s) inside lazy() for importing components when its required
const  Landing  = lazy( ()=> import('./components/Landing' ))
const  Dashboard  = lazy( ()=> import('./components/Dashboard' ))

function App() {
//suspense API
  return (
    <div>
      {/*useNavigate must be used in below component*/}
      <BrowserRouter>
      {/* useNavigate can only be used for component used inside BrowserRouter  so calling 'Appbar' here */}
        <Appbar/>
        <Routes>
          {/* Need to render 'Dashboard' , but it will be sent by BackEnd
          in the meanwhile render 'Loading' using Suspense */}
          <Route path = "/dashboard" element = {<Suspense fallback = {"loading..."}><Dashboard/></Suspense>} />
          <Route path = "/" element = {<Suspense fallback = {"Loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

{/*client side  routing*/}
function Appbar(){
  const navigate = useNavigate();
// 'useNavigate' can only be used for component used inside BrowserRouter
  return <div>
      <div>
        <button onClick={function(){
 {/* This is not right way to go fom one page to other */}
         // window.location.href = "/";
         //as every thing like index and js again comes from BE
         //so., its not client side routing
         navigate("/");
        }}>Landing Page</button>
        <button onClick={function(){
   {/* This is not right way to go fom one page to other */}        
         // window.location.href = "/dashboard";
         navigate("/dashboard");
        }}>DashBoard </button>
    </div>
  </div>
}

export default App
