//dev mode in Figma
import './App.css'
import { RevenueCard } from './components/RevenueCard'
// MUI component import
//Good for Hackathlons
// customization of compoenet is very hard
import { Button } from '@mui/material'
import { SideBar } from './components/sidebar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    
   
   <div className='grid grid-cols-3'>
         {/* // Calling card compoenent */}
         <RevenueCard title={"Amount Pending"}  amount={"92,312,20"} orderCount= {13}/>
         <SideBar/>
   </div>
 
   

  )
}

export default App
