import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import './1.css'
function Example1() {
    const [currentLight, setCurrentLight] = useState({ color: 'red', timing: 3000, explicitTiming: 0 });
    const handleChange = (color, timing) => {
        setCurrentLight({ color, timing, explicitTiming: timing*1000 })
    }
    useEffect(() => {
        const id = setTimeout(() => {
            if (currentLight.color === 'red') setCurrentLight({ color: 'yellow', timing: 2000, explicitTiming: 0 })
            if (currentLight.color === 'yellow') setCurrentLight({ color: 'green', timing: 3000, explicitTiming: 0 })
            if (currentLight.color === 'green') setCurrentLight({ color: 'red', timing:  3000, explicitTiming: 0 })
        }, currentLight.explicitTiming?currentLight.explicitTiming:currentLight.timing)
        return () => clearTimeout(id)
    }, [currentLight])
    return (
        <div className=" lights-container">
            <div style={{ backgroundColor: currentLight.color === 'red' ? 'red' : '' }} className='lights red-light'>Red</div>
            <div style={{ backgroundColor: currentLight.color === 'yellow' ? 'yellow' : '' }} className="lights yellow-light">yellow</div>
            <div style={{ backgroundColor: currentLight.color === 'green' ? 'green' : '' }} className="lights green-light"> Green</div>
            <div className="buttons-container">
                <div className="buttons"><input onBlur={(e) => handleChange('red', e.target.value)} placeholder="red" type="number" /></div>
                <div className="buttons"><input onBlur={(e) => handleChange('yellow', e.target.value)} placeholder="yellow" type="number" /></div>
                <div className="buttons"><input onBlur={(e) => handleChange('green', e.target.value)} placeholder="green" type="number" /></div>
            </div>
        </div>
    )
}
export default Example1;