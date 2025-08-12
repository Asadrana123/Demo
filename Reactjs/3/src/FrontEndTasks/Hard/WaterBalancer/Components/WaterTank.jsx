import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import './WaterTank.css'
function WaterTanks({ height, changeHeight, index, timeTracker }) {
  const [liveLitre, setLiveLitre] = useState((height * 20 / 6).toFixed(2));
  const waterRef = useRef(height);
  const previousCallTime = useRef(null);
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      if (previousCallTime.current === null) {
        setLiveLitre((waterRef.current.offsetHeight * 20 / 6).toFixed(2));
        previousCallTime.current = Date.now();
        return; // Prevent further checks this call
      }
      else if (Date.now() - previousCallTime.current > 200) {
        setLiveLitre((waterRef.current.offsetHeight * 20 / 6).toFixed(2));
        previousCallTime.current = Date.now();
      }
    })
    ro.observe(waterRef.current);
    let id = setTimeout(() => {
      if (waterRef.current) setLiveLitre((waterRef.current.offsetHeight * 20 / 6).toFixed(2));
    }, timeTracker.current * 1000 + 50)
    return () => {
      ro.disconnect();
      clearTimeout(id);
    }
  }, [height])
  return (
    <div className='water-tank-container'>
      <div className='buttons-container'>
        <button onClick={() => {
          changeHeight('add', index)
        }} >ADD</button>
        <button onClick={() => {
          changeHeight('empty', index)
        }}>EMPTY</button>
      </div>
      <div className='tank'>
        <div ref={waterRef} style={{ height: `${height * 60}px`, transition: `height ${timeTracker.current}s linear` }} className='water'>

        </div>
      </div>
      <div className='live-litre'>
        {liveLitre} lts
      </div>
    </div>
  )
}

export default WaterTanks