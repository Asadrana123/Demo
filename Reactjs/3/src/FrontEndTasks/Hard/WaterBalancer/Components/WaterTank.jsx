import React, { useEffect, useState, forwardRef } from 'react'
import { useRef } from 'react'
import { convertHeightToLitre } from '../utils/utils';
import './WaterTank.css'
const WaterTanks = forwardRef(({ height, changeHeight, index, timeTracker, liveLitre }, ref) => {
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
        <div ref={ref} style={{ height: `${height * 60}px`, transition: `height ${timeTracker.current}s linear` }} className='water'>

        </div>
      </div>
      <div className='live-litre'>
        {liveLitre} lts
      </div>
    </div>
  )
})

export default WaterTanks