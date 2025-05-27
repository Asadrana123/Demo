import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
     console.log('in useEffect');
  })
  const handleClick=()=>{
    setCount(count+1);
  }
  return (
    <>
       <button onClick={handleClick} >Click</button>
       <div>{count}</div>
    </>
  )
}

export default App
