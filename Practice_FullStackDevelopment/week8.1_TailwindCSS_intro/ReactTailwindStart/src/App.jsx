import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* simple CSS */}
       <div style={{display: "flex", justifyContent: "center"}}>
          <div style={{backgroundColor: "red"}}>Pure CSS 1</div>
          <div style={{backgroundColor: "green"}}>Pure CSS  2</div>
          <div style={{backgroundColor: "yellow"}}>Pure CSS  3</div>
      </div>
      {/* Just 'flex' and 'flex justify-start' are same*/}
      <div className='flex justify-start'>
          <div className='bg-red-500'>TailwindCSS Just FLEX 1</div>
          <div className='bg-green-500'>TailwindCSS Just FLEX 2</div>
          <div className='bg-yellow-500'>TailwindCSS Just FLEX 3</div>
      </div>

    {/* TailwindCSS */}
    {/* flex is basically to put all children of parent  div in one row and their spacing */}
      <div className='flex justify-center'>
          <div className='bg-red-500'>TailwindCSS 1</div>
          <div className='bg-green-500'>TailwindCSS 2</div>
          <div className='bg-yellow-500'>TailwindCSS 3</div>
      </div>
    {/* Grids are used to manipulate widths to children divs */}
    {/* col-3: will divide in 3 parts */}
      <div className='grid grid-cols-3'>
          <div className='bg-red-500'>TailwindCSS grid 1</div>
          <div className='bg-green-500'>TailwindCSS grid 2</div>
          <div className='bg-yellow-500'>TailwindCSS grid 3</div>
      </div>
    {/* div children un-equal width  30%-10%-10%-50%*/}
      <div className='grid grid-cols-10'>
          <div className='bg-red-500 col-span-3'>TailwindCSS col-span 1</div>
          <div className='bg-green-500 col-span-1'>TailwindCSS col-span 2</div>
          <div className='bg-yellow-500 col-span-1'>TailwindCSS col-span 3</div>
          <div className='bg-purple-500 col-span-5'>Tailwind col-span 4</div>
      </div>
    {/* here breakpoint is md which means after this break-point background color is blue, else it will be red  its called as RESPONSIVENESS*/}
      <div className='bg-red-500 md:bg-blue-500'>
        Hi There !!! 
      </div>

      {/* RESPONSIVENESS CASE */}
      {/* if => 'md' break-point 2 cols, if => lg 4 cols , there are 1 coloumn otherwise 1 */}
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4'>
          <div className='bg-red-500'>TailwindCSS 1</div>
          <div className='bg-green-500'>TailwindCSS 2</div>
          <div className='bg-yellow-500'>TailwindCSS 3</div>
          <div className='bg-purple-500'>TailwindCSS 4</div>
      </div>

    </>
  )
}

export default App
