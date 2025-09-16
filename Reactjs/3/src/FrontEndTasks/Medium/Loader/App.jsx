import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Loader from './Loader'
import { useCallback } from 'react';
function App() {
    const [loaders, setLoaders] = useState([{ isRunning: true, width: 0 }]);
    const timeOutId = useRef(null);
    useEffect(() => {
        timeOutId.current = setTimeout(() => {
            setLoaders(prev => {
                return prev.map((loader) => {
                    if (loader.isRunning && loader.width < 100) return { ...loader, width: loader.width + 1 }
                    else return loader
                })
            })
        }, 100)
        return () => clearTimeout(timeOutId.current);
    }, [loaders])
    const handleStopStart = useCallback((targetIndex) => setLoaders((prev) => prev.map((loader, index) => {
        if (targetIndex === index) return { ...loader, isRunning: loader.isRunning ? false : true }
        return loader;
    })), [])
    const handleAdd = useCallback(() => setLoaders((prev) => [...prev, { isRunning: true, width: 0 }]), [])
    const areAllRunning = () => {
        let index = loaders.findIndex((loader) => loader.isRunning === false);
        console.log(index);
        return index === -1 ? true : false;
    }
    const handleReset = () => {
        setLoaders(prev => prev.map((_loader) => {
            return { isRunning: true, width: 0 }
        })
        )
    }
    const handleStartStopAll = () => {
        if (areAllRunning()) {
            setLoaders(prev => {
                return prev.map((loader) => {
                    return { ...loader, isRunning: false }
                })
            })
        }
        else {
            setLoaders(prev => prev.map((loader) => {
                return { ...loader, isRunning: true }
            })
            )
        }
    }
    return (
        <>
            <div className='loader-container'>
                {loaders.map((loader, index) => {
                    return <Loader
                        index={index}
                        handleStopStart={handleStopStart}
                        handleAdd={handleAdd}
                        isRunning={loader.isRunning}
                        width={loader.width}
                        key={index}
                    />
                })}
            </div>
            <div className='common-btn-container'>
                <div className='btn' onClick={handleStartStopAll} > {areAllRunning() ? 'Stop' : 'Start'} All</div>
                <div className='btn' onClick={handleReset}  > Reset All</div>
            </div>
        </>
    )
}

export default App