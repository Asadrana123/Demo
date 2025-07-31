import React from "react";
import ReactDOM from "react-dom/client";
import { useRef } from "react";
function Example1() {
    const divRef = useRef(null);
    return (
        <div ref={divRef} onClick={handleClick}>
            Click me
        </div>
    )

}

export default Example1