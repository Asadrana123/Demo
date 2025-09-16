import React, { useEffect, useRef, useState } from 'react'
import './Loader.css'
function Loader({ handleAdd, index, handleStopStart, width, isRunning }) {
    return (
        <div className='loader'>
            <div className='bar'>
                <div className='percentage'>{width}</div>
                <div style={{ width: `${width}%` }} className='inner'></div>
            </div>
            <div className='btn' onClick={handleAdd}>Add</div>
            <div className='btn' onClick={() => handleStopStart(index)}>{isRunning ? 'stop' : 'start'}</div>
        </div>
    )
}

export default React.memo(Loader)