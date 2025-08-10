import React, { useState } from "react";
import { useCallback } from "react";
const Child = React.memo(({ onClick }) => {
    console.log(onClick);
    return (
        <div>
            Child
        </div>
    )
})
function Example1() {
    const [count, setState] = useState(0);
    const [count1, setState1] = useState(0);
    const handleClick = useCallback(() => {
        console.log(count1);
        console.log(count);
        setState1((prev) => {
            console.log(prev);
            return prev;
        })
    }, [])
    return (
        <div>
            <div onClick={handleClick}>hi</div>
            <button onClick={() => {
                setState(2)
                setState1(2)
            }}>Click me</button>
        </div>
    )
}
export default Example1;