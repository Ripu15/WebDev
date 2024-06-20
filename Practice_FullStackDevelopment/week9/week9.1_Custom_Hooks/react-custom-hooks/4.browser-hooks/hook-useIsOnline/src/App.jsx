//use-case: if someone is palaying game online, then it can tell
//the gamer that internet is npt there, plz try re-connect
import { useState , useEffect} from 'react'
import './App.css'

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() =>{
    window.addEventListener('online',() => setIsOnline(true));
    window.addEventListener('offline',() => setIsOnline(false));
  },[])
  return isOnline;
}

function App() {
  const isOnline = useIsOnline();

  return (
    <>
      {isOnline ? "You are online !!! ": "You are not online, plz connect to internet !!! "}
    </>
  )
}

export default App
