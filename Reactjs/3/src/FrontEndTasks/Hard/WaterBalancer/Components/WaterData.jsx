import React from 'react'
import './WaterData.css'
function WaterData({ text }) {
    return (
        <div className='tank-litre'>{(text*200).toFixed(2)} lts</div>
    )
}

export default WaterData