import React, { useState } from 'react'
import './Slider.css'
import { useRef, useEffect } from 'react';
import { setDotPosition } from '../helpers/helpers';
function Slider() {
    const sliderRangeRef = useRef(null);
    const dotOne = useRef(null);
    const dotTwo = useRef(null);
    const [percentageMoveDotOne, setpercentageMoveDotOne] = useState(50);
    const [percentageMoveDotTwo, setpercentageMoveDotTwo] = useState(80);
    const mouseMoveHandlerOne = (e) => {
        setDotPosition(e, sliderRangeRef, setpercentageMoveDotOne)
    }
    const mouseDownEventHandlerOne = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerOne)
    }
    const mouseUpEventHandlerOne = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerOne);
    }
    const mouseMoveHandlerTwo = (e) => {
        setDotPosition(e, sliderRangeRef, setpercentageMoveDotTwo)
    }
    const mouseDownEventHandlerTwo = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerTwo)
    }
    const mouseUpEventHandlerTwo = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerTwo);
    }
    useEffect(() => {
        dotOne.current.addEventListener('mousedown', mouseDownEventHandlerOne)
        document.addEventListener('mouseup', mouseUpEventHandlerOne)
        dotTwo.current.addEventListener('mousedown', mouseDownEventHandlerTwo)
        document.addEventListener('mouseup', mouseUpEventHandlerTwo)
    }, [])
    return (
        <div className='slider-container'>
            <div>0</div>
            <div ref={sliderRangeRef} className='slider'>
                <div ref={dotOne} style={{ left: `${percentageMoveDotOne}%` }} className='slider-dot'></div>
                <div ref={dotTwo} style={{ left: `${percentageMoveDotTwo}%` }} className='slider-dot'></div>
            </div>
            <div>10000</div>
        </div>
    )
}

export default Slider