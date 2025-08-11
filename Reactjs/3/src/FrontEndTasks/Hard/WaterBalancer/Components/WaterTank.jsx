import React from 'react'
import { useRef } from 'react'
import './WaterTank.css'
function WaterTanks({ height, changeHeight, index, timeTracker }) {
  console.log(timeTracker.current);
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
        <div style={{ height: `${height * 60}px`, transition: `height ${timeTracker.current}s linear` }} className='water'>

        </div>
      </div>
    </div>
  )
}

export default WaterTanks