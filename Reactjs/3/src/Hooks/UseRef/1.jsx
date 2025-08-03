import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useRef } from "react";
function Example1() {
    const divRef = useRef(null);
    console.log(divRef.current);
    useEffect(()=>{
        console.log(divRef.current);
    })
    const handleClick=()=>{
        console.log('click');
    }
    return (
        <div ref={divRef} onClick={handleClick}>
            Click me
        </div>
    )

}

export default Example1