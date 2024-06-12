import { useEffect , useState } from 'react';


function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("Hi, There... Re-render Starts !!! ")

  //without 'useEffect' it runs infinitely
  //as 'setBankData' keeps on changing, so, the re-rendering
  useEffect(function(){
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 3000);
},[])

  useEffect(function() {
    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
    }, 1000);
},[])

  //console.log("Hi there BEFORE !!!");
  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
  //console.log("Hi there AFTER !!!");

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App
