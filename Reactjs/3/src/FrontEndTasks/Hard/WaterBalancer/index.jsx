import React, { useEffect, useRef, useState, useCallback } from 'react'
import useManageTank from './hooks/useManageTank';
import WaterTanks from './Components/WaterTank';
import { convertHeightToLitre } from './utils/utils.js';
import './index.css'
import RangeContainer from './Components/RangeContainer';
function index() {
    const { tanksData, changeHeight, changeRange, timeTracker } = useManageTank();
    const [liveLitres, setLiveLitres] = useState(Array.from({ length: tanksData.length }, () => 0.00));
    const tanksRef = useRef(Array.from({ length: tanksData.length }, () => null));
    const previousCallTime = useRef(null);
    const updateLiveLitre = useCallback((height, index) => {
        if (tanksRef.current === null) return;
        setLiveLitres(prev => {
            const newElements = [...prev];
            newElements[index] = convertHeightToLitre(height);
            return newElements;
        });
    }, [convertHeightToLitre, tanksRef, setLiveLitres]);
    useEffect(() => {
        console.log(tanksData);
        if (tanksRef.current === null) return;
        const ro = new ResizeObserver((entries) => {
            if (previousCallTime.current === null || Date.now() - previousCallTime.current > 300) {
                entries.map((entry, index) => {
                    const idx = tanksRef.current.findIndex((ref) => entry.target === ref)
                    if (idx !== -1) updateLiveLitre(entry.contentRect.height, idx);
                })
                previousCallTime.current = Date.now();
            }
        })
        tanksRef.current.forEach((ref) => {
            if (ref) ro.observe(ref);
        })
        let id = setTimeout(() => {
            const avgLitre = convertHeightToLitre(tanksData[0] * 60);
            setLiveLitres(Array.from({ length: tanksData.length }, () => avgLitre));
        }, timeTracker.current * 1000)
        return () => {
            clearTimeout(id);
            ro.disconnect();
        }
    }, [tanksData])
    return (
        <div className='main-container'>
            <h3>Press and Hold "Add" to start filling the tank</h3>
            <div className='tanks-container'>
                {tanksData.map((data, index) => {
                    return <WaterTanks
                        key={index}
                        timeTracker={timeTracker}
                        height={data}
                        changeHeight={changeHeight}
                        index={index}
                        ref={(el) => tanksRef.current[index] = el}
                        liveLitre={liveLitres[index]}
                    />
                })}
            </div>
            <RangeContainer range={tanksData.length - 4} changeRange={changeRange} />
        </div>
    )
}

export default index