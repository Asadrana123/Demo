import React, { useState } from "react";
import {useCallback} from "react";
const Child=React.memo(({increment})=>{
    console.log('increment');
    return(
        <button onClick={()=>increment(5)}>increment</button> 
    )  
})
function Example2() {
    const [count,setState]=useState(0);
    const handleClick=useCallback((increment)=>{
             setState((prev)=>prev+count);
    },[])
    const handleClick2=(increment)=>{
        setState(count+increment);
    }
    return (
        <div>
           <Child increment={handleClick} />
           <div>{count}</div>
        </div>
    ) 
}
export default Example2;