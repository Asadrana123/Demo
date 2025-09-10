import React, { useEffect, useState, useRef } from 'react'
import useFilter from './useFilter';
import { useStateProvider } from '../context/dataContext';
import { calculateSliderPositionFromPrice, handleKeyDownDotOneHelper, handleKeyDownDotTwoHelper, setDotPositionOne, setDotPositionTwo } from '../helpers/helpers';
function useSlider() {
    const sliderRangeRef = useRef(null);
    const { handlePriceRange } = useFilter();
    const { state: { filters: { priceRange }, isReset } } = useStateProvider();
    const dotOne = useRef(null);
    const dotTwo = useRef(null);
    const priceRangeRef = useRef(priceRange)
    const debounceSlider = useRef(null)
    const [percentageMoveDotOne, setpercentageMoveDotOne] = useState(calculateSliderPositionFromPrice(priceRange[0]));
    const [percentageMoveDotTwo, setpercentageMoveDotTwo] = useState(calculateSliderPositionFromPrice(priceRange[1]));
    const mouseMoveHandlerOne = (e) => {
        setDotPositionOne(debounceSlider, e.clientX, Math.floor(sliderRangeRef.current.getBoundingClientRect().left), sliderRangeRef.current.getBoundingClientRect().right, setpercentageMoveDotOne, dotTwo.current.getBoundingClientRect().left, handlePriceRange, priceRangeRef.current)
    }
    const mouseDownEventHandlerOne = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerOne)
    }
    const mouseUpEventHandlerOne = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerOne);
    }
    const mouseMoveHandlerTwo = (e) => {
        setDotPositionTwo(debounceSlider, e.clientX, Math.floor(sliderRangeRef.current.getBoundingClientRect().left), sliderRangeRef.current.getBoundingClientRect().right, setpercentageMoveDotTwo, dotOne.current.getBoundingClientRect().left, handlePriceRange, priceRangeRef.current)
    }
    const mouseDownEventHandlerTwo = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerTwo)
    }
    const mouseUpEventHandlerTwo = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerTwo);
    }
    const handleKeyDownDotOne = (e) => {
        handleKeyDownDotOneHelper(
            debounceSlider,
            e,
            setpercentageMoveDotOne,
            percentageMoveDotOne,
            percentageMoveDotTwo,
            handlePriceRange,
            priceRangeRef.current
        );
    };

    const handleKeyDownDotTwo = (e) => {
        handleKeyDownDotTwoHelper(
            debounceSlider,
            e,
            setpercentageMoveDotTwo,
            percentageMoveDotTwo,
            percentageMoveDotOne,
            handlePriceRange,
            priceRangeRef.current
        );
    };
    useEffect(() => {
        if (isReset) {
            setpercentageMoveDotOne(calculateSliderPositionFromPrice(priceRange[0]));
            setpercentageMoveDotTwo(calculateSliderPositionFromPrice(priceRange[1]));
        }
        priceRangeRef.current = priceRange
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
            document.removeEventListener('mousemove', mouseMoveHandlerTwo)
            document.removeEventListener('mousemove', mouseMoveHandlerOne);
            clearTimeout(debounceSlider.current);
        }
    }, [])

    return { dotOne, dotTwo, minPrice: priceRange[0], maxPrice: priceRange[1], percentageMoveDotOne, percentageMoveDotTwo, sliderRangeRef, setpercentageMoveDotOne, setpercentageMoveDotTwo, handleKeyDownDotOne, handleKeyDownDotTwo }
}

export default useSlider;