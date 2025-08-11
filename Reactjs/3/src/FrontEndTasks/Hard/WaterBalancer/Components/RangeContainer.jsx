import React from 'react'
import './RangeContainer.css'
function RangeContainer({ changeRange, range }) {
    return (
        <div className='range-container'>
            <span>Number of Tanks</span>
            <span><input type='range' min='0' max='4' step='1' onChange={(e) => changeRange(e.target.value)} value={range} /></span>
        </div>
    )
}

export default RangeContainer