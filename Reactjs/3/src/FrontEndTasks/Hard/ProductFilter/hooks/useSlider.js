import React, { useEffect, useState, useRef } from 'react'
import useFilter from './useFilter';
import { useDataContext } from '../context/dataContext';
import { calculateSliderPositionFromPrice, setDotPositionOne, setDotPositionTwo } from '../helpers/helpers';
function useSlider() {
    const sliderRangeRef = useRef(null);
    const { handlePriceRange } = useFilter();
    const { state } = useDataContext();
    const dotOne = useRef(null);
    const dotTwo = useRef(null);
    const [percentageMoveDotOne, setpercentageMoveDotOne] = useState(calculateSliderPositionFromPrice(state.filters.priceRange[0]));
    const [percentageMoveDotTwo, setpercentageMoveDotTwo] = useState(calculateSliderPositionFromPrice(state.filters.priceRange[1]));
    const [minPrice, setMinPrice] = useState(state.filters.priceRange[0]);
    const [maxPrice, setMaxPrice] = useState(state.filters.priceRange[1]);
    const mouseMoveHandlerOne = (e) => {
        setDotPositionOne(e.clientX, sliderRangeRef.current.getBoundingClientRect().left, sliderRangeRef.current.getBoundingClientRect().right, setpercentageMoveDotOne, dotTwo.current.getBoundingClientRect().left, setMinPrice)
    }
    const mouseDownEventHandlerOne = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerOne)
    }
    const mouseUpEventHandlerOne = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerOne);
    }
    const mouseMoveHandlerTwo = (e) => {
        setDotPositionTwo(e.clientX, sliderRangeRef.current.getBoundingClientRect().left, sliderRangeRef.current.getBoundingClientRect().right, setpercentageMoveDotTwo, dotOne.current.getBoundingClientRect().left, setMaxPrice)
    }
    const mouseDownEventHandlerTwo = (e) => {
        document.addEventListener('mousemove', mouseMoveHandlerTwo)
    }
    const mouseUpEventHandlerTwo = (e) => {
        document.removeEventListener('mousemove', mouseMoveHandlerTwo);
    }
    // when user will reset then priceRange will change the minPrice,maxPrice state
    useEffect(() => {
        if (state.isReset) {
            setpercentageMoveDotOne(calculateSliderPositionFromPrice(state.filters.priceRange[0]));
            setpercentageMoveDotTwo(calculateSliderPositionFromPrice(state.filters.priceRange[1]));
            setMinPrice(state.filters.priceRange[0]);
            setMaxPrice(state.filters.priceRange[1])
        }
    }, [state.filters.priceRange])
    useEffect(() => {
        console.log('hi');
        const timeoutId = setTimeout(() => {
            handlePriceRange([minPrice, maxPrice])

        }, 100);
        return () => clearTimeout(timeoutId);
    }, [minPrice, maxPrice])
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

    return { dotOne, dotTwo, minPrice, maxPrice, percentageMoveDotOne, percentageMoveDotTwo, sliderRangeRef, setMinPrice, setMaxPrice, setpercentageMoveDotOne, setpercentageMoveDotTwo }
}

export default useSlider;