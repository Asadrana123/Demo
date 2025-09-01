import React, { useState } from 'react'
import './Slider.css'
import useSlider from '../hooks/useSlider'
import { handleKeyDownDotOne, handleKeyDownDotTwo } from '../helpers/helpers'
function Slider() {
    const { dotOne, dotTwo, minPrice, maxPrice, percentageMoveDotOne, percentageMoveDotTwo, sliderRangeRef, setMaxPrice, setMinPrice, setpercentageMoveDotOne, setpercentageMoveDotTwo } = useSlider()
    return (
        <div className='slider-container'>
            <div className='price-text'>{minPrice.toLocaleString()}</div>
            <div ref={sliderRangeRef} className='slider'>
                <div tabIndex={1} onKeyDown={(e) => handleKeyDownDotOne(e, setpercentageMoveDotOne, percentageMoveDotOne, percentageMoveDotTwo, setMinPrice)} ref={dotOne} style={{ left: `${percentageMoveDotOne}%` }} className='slider-dot'></div>
                <div tabIndex={2} onKeyDown={(e) => handleKeyDownDotTwo(e, setpercentageMoveDotTwo, percentageMoveDotTwo, percentageMoveDotOne, setMaxPrice)} ref={dotTwo} style={{ left: `${percentageMoveDotTwo}%`, transform: ' translate(-100%, -50%)' }} className='slider-dot'></div>
            </div>
            <div className='price-text'>{maxPrice.toLocaleString()}</div>
        </div >
    )
}

export default Slider;