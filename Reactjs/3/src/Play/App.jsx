import React, { useEffect, useState } from 'react'
import './App.css'
const lightsData = [{ color: 'red', time: 5000 }, { color: 'green', time: 2000 }, { color: 'yellow', time: 3000 }]
function App() {
    const [activeLight, setActiveLight] = useState(0);
    useEffect(() => {
        setTimeout(() => setActiveLight(prev => {
            switch (prev) {
                case 0:
                    return 2;
                case 1:
                    return 0;
                case 2:
                    return 1;
            }
        }), lightsData[activeLight].time)
    }, [activeLight])
    return (
        <div className='container'>
            {lightsData.map((data, index) => {
                return <div
                    className='light'
                    key={data.color}
                    style={{ backgroundColor: activeLight === index ? data.color : 'white' }}>
                </div>
            })}
        </div>
    )
}

export default App