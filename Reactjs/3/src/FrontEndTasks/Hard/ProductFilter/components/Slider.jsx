import React, { useState } from 'react'
import './Slider.css'
import { useRef, useEffect } from 'react';
import { calulatePriceFromSliderPosition, setDotPositionOne, setDotPositionTwo } from '../helpers/helpers';
function Slider() {
    const sliderRangeRef = useRef(null);
    const dotOne = useRef(null);
    const dotTwo = useRef(null);
    const [percentageMoveDotOne, setpercentageMoveDotOne] = useState(1);
    const [percentageMoveDotTwo, setpercentageMoveDotTwo] = useState(80);
    const mouseMoveHandlerOne = (e) => {
        setDotPositionOne(e.clientX, sliderRangeRef.current.getBoundingClientRect().left, sliderRangeRef.current.getBoundingClientRect().right, setpercentageMoveDotOne, dotTwo.current.getBoundingClientRect().left)
    }
    const mouseDownEventHandlerOne = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerOne)
    }
    const mouseUpEventHandlerOne = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerOne);
    }
    const mouseMoveHandlerTwo = (e) => {
        setDotPositionTwo(e.clientX, sliderRangeRef.current.getBoundingClientRect().left, sliderRangeRef.current.getBoundingClientRect().right, setpercentageMoveDotTwo, dotOne.current.getBoundingClientRect().left)
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
        return () => {
            dotOne.current.removeEventListener('mousedown', mouseDownEventHandlerOne)
            document.removeEventListener('mouseup', mouseUpEventHandlerOne)
            dotTwo.current.removeEventListener('mousedown', mouseDownEventHandlerTwo)
            document.removeEventListener('mouseup', mouseUpEventHandlerTwo)
        }
    }, [])
    return (
        <div className='slider-container'>
            <div className='price-text'>{calulatePriceFromSliderPosition(percentageMoveDotOne).toLocaleString()}</div>
            <div ref={sliderRangeRef} className='slider'>
                <div ref={dotOne} style={{ left: `${percentageMoveDotOne}%` }} className='slider-dot'></div>
                <div ref={dotTwo} style={{ left: `${percentageMoveDotTwo}%`, transform: ' translate(-100%, -50%)' }} className='slider-dot'></div>
            </div>
            <div className='price-text'>{calulatePriceFromSliderPosition(percentageMoveDotTwo).toLocaleString()}</div>
        </div >
    )
}

export default Slider