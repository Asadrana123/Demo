import React, { useEffect, useState, useRef } from 'react'
import useFilter from './useFilter';
import { useDataContext } from '../context/dataContext';
import { calculateSliderPositionFromPrice, handleKeyDownDotOneHelper, handleKeyDownDotTwoHelper,setDotPositionOne, setDotPositionTwo } from '../helpers/helpers';
function useSlider() {
    const sliderRangeRef = useRef(null);
    const { handlePriceRange } = useFilter();
    const { state: { filters: { priceRange }, isReset } } = useDataContext();
    const dotOne = useRef(null);
    const dotTwo = useRef(null);
    const debounceSlider = useRef(null)
    const [percentageMoveDotOne, setpercentageMoveDotOne] = useState(calculateSliderPositionFromPrice(priceRange[0]));
    const [percentageMoveDotTwo, setpercentageMoveDotTwo] = useState(calculateSliderPositionFromPrice(priceRange[1]));
    const mouseMoveHandlerOne = (e) => {
        setDotPositionOne(debounceSlider, e.clientX, Math.floor(sliderRangeRef.current.getBoundingClientRect().left), sliderRangeRef.current.getBoundingClientRect().right, setpercentageMoveDotOne, dotTwo.current.getBoundingClientRect().left, handlePriceRange, priceRange)
    }
    const mouseDownEventHandlerOne = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerOne)
    }
    const mouseUpEventHandlerOne = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerOne);
    }
    const mouseMoveHandlerTwo = (e) => {
        setDotPositionTwo(debounceSlider, e.clientX, Math.floor(sliderRangeRef.current.getBoundingClientRect().left), sliderRangeRef.current.getBoundingClientRect().right, setpercentageMoveDotTwo, dotOne.current.getBoundingClientRect().left, handlePriceRange, priceRange)
    }
    const mouseDownEventHandlerTwo = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerTwo)
    }
    const mouseUpEventHandlerTwo = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerTwo);
    }
    const handleKeyDownDotOne=(e)=>{
          handleKeyDownDotOneHelper(debounceSlider, e, setDotPositionOne, percentageMoveDotOne, percentageMoveDotTwo, handlePriceRange)
    }
    const handleKeyDownDotTwo=(e)=>{
          handleKeyDownDotTwoHelper(debounceSlider, e, setDotPositionTwo, percentageMoveDotTwo, percentageMoveDotTwo, handlePriceRange)
    }
    useEffect(() => {
        if (isReset) {
            setpercentageMoveDotOne(calculateSliderPositionFromPrice(priceRange[0]));
            setpercentageMoveDotTwo(calculateSliderPositionFromPrice(priceRange[1]));
        }
    }, [priceRange])
    useEffect(() => {
        dotOne.current.addEventListener('mousedown', mouseDownEventHandlerOne)
        document.addEventListener('mouseup', mouseUpEventHandlerOne)
        dotTwo.current.addEventListener('mousedown', mouseDownEventHandlerTwo)
        document.addEventListener('mouseup', mouseUpEventHandlerTwo)
        return () => {
            dotOne.current?.removeEventListener('mousedown', mouseDownEventHandlerOne)
            document.removeEventListener('mouseup', mouseUpEventHandlerOne)
            dotTwo.current?.removeEventListener('mousedown', mouseDownEventHandlerTwo)
            document.removeEventListener('mouseup', mouseUpEventHandlerTwo)
        }
    }, [])

    return { dotOne, dotTwo, minPrice: priceRange[0], maxPrice: priceRange[1], percentageMoveDotOne, percentageMoveDotTwo, sliderRangeRef, setpercentageMoveDotOne, setpercentageMoveDotTwo,handleKeyDownDotOne,handleKeyDownDotTwo }
}

export default useSlider;