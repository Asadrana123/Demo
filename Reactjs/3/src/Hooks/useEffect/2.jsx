import React, { useState } from "react";
import ReactDom from 'react-dom/client';
import { useEffect } from "react";
function Children(){
    return <div>Children</div>
}
function Example2(){
    const [show,setShow]=useState(true);
    useEffect(()=>{
        console.log('hi');
     },[show])
    return (
        <div>
            <button  onClick={()=>setShow(!show)}>Click</button>
            {show && <Children/>}
        </div>
    )
}

export default Example2;