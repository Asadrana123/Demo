import React, { useState } from "react";
import {useCallback} from "react";
const Child=React.memo(({onClick})=>{
    console.log(onClick);
    return(
         <div>
            Child
         </div>
    )
})
function Example1() {
    const [count,setState]=useState(0);
    const handleClick=useCallback(()=>{
            console.log('Clicked');
    },[count])
    return (
        <div>
           <Child onClick={handleClick} />
           <button onClick={()=>setState(count+1)}>Click me</button>
        </div>
    )
}
export default Example1;