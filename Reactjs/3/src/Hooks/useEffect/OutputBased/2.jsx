import React, { useState, useEffect } from "react";

function Example2() {
    const [state, setState] = useState(0)
    console.log(state)

    useEffect(() => {
        setState(state => state + 1)
    }, [])

    useEffect(() => {    
        console.log(state)
        setTimeout(() => {
            console.log(state)
        }, 100)
    }, [])
    return (
        <div>
          hi
        </div>
    );
}

export default Example2;
