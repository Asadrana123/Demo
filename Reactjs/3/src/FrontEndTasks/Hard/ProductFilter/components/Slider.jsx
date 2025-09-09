import React, { useState } from 'react'
import './Slider.css'
import useSlider from '../hooks/useSlider'
function Slider() {
    const { dotOne, dotTwo, minPrice, maxPrice, percentageMoveDotOne, percentageMoveDotTwo, sliderRangeRef, handleKeyDownDotOne, handleKeyDownDotTwo } = useSlider()
    return (
        <div className='slider-container'>
            <div className='price-text'>{minPrice.toLocaleString()}</div>
            <div ref={sliderRangeRef} className='slider'>
                <div tabIndex={0} onKeyDown={(e) => handleKeyDownDotOne(e)} ref={dotOne} style={{ left: `${percentageMoveDotOne}%` }} className='slider-dot'></div>
                <div tabIndex={1} onKeyDown={(e) => handleKeyDownDotTwo(e)} ref={dotTwo} style={{ left: `${percentageMoveDotTwo}%` }} className='slider-dot'></div>
            </div>
            <div className='price-text'>{maxPrice.toLocaleString()}</div>
        </div >
    )
}

export default React.memo(Slider);