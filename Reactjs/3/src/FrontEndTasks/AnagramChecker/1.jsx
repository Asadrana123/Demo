import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import './1.css'
function Example1() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const submit = () => {
        if (input1.length != input2.length) return false;
        if (input1.length === 0) return true;
        let sortedInput1 = input1.split('').sort().join('');
        let sortedInput2 = input2.split('').sort().join('');
        return sortedInput1 === sortedInput2
    }
    const handleClick = () => {
        const ans = submit();
        console.log(ans);
    }
    return (
        <div className=" lights-container">
            <input value={input1} onChange={(e) => setInput1(e.target.value)} type="text" />
            <input value={input2} onChange={(e) => setInput2(e.target.value)} type="text" />
            <button onClick={() => handleClick()}>Check</button>
        </div>
    )
}
export default Example1;