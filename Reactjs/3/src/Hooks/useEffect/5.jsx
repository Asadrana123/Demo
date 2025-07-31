import React, { useState } from "react";
import { useEffect } from "react";
function Example5() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
       setCountB(0)
       setFlag(false);
    },[countA])
    useEffect(()=>{
        if(countB>=10&&flag===false){
            setFlag(true);
            alert("Count B reached 10");
        }
    },[countB])
    return (
        <div >
            <div>
                <button onClick={() => setCountA((prev) => prev + 1)}>increamentA</button>
                <span>A: {countA}</span>
            </div>
            <div>
                <button onClick={() => setCountB((prev) => {
                    if(prev>=10) return prev
                     return prev + 1
                })}>increamentB</button>
                <span>B: {countB}</span>
            </div>
        </div>
    )
}

export default Example5;