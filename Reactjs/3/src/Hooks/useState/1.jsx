import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
function Example(){
   let [count,setCount]=useState(0);
   const handleClick1=()=>{
     count=count+1;
     console.log(count);
     return count;
   }
   const handleClick2=()=>{
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
   }
   const handleClick3=()=>{
      setCount((prevCount)=>prevCount+1)
      setCount((prevCount)=>prevCount+1)
      setCount((prevCount)=>prevCount+1)
   }
  return (
    <div>
        <span>{count}</span>
        <button onClick={handleClick1}>Click1</button>
        <button onClick={handleClick2}>Click2</button>
         <button onClick={handleClick3}>Click3</button>
    </div>
  )

}

export default Example