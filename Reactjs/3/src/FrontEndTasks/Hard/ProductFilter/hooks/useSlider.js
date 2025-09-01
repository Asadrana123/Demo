import React, { useEffect, useState, useRef } from 'react'
import { useRef, useEffect } from 'react';
import useFilter from './useFilter';
import { useDataContext } from '../context/dataContext';
import { initialDotOnePosition, initialDotTwoPosition } from '../constants/productConstant'
import { setDotPositionOne, setDotPositionTwo } from '../helpers/helpers';
function useSlider() {
    const sliderRangeRef = useRef(null);
    const { handlePriceRange } = useFilter();
    const { state } = useDataContext();
    const dotOne = useRef(null);
    const dotTwo = useRef(null);
    const [percentageMoveDotOne, setpercentageMoveDotOne] = useState(initialDotOnePosition);
    const [percentageMoveDotTwo, setpercentageMoveDotTwo] = useState(initialDotTwoPosition);
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

    useEffect(() => {
        if (state.isReset === true) {
            setpercentageMoveDotOne(initialDotOnePosition);
            setpercentageMoveDotTwo(initialDotTwoPosition);
            setMinPrice(state.filters.priceRange[0]);
            setMaxPrice(state.filters.priceRange[1])
        }
    }, [state])

    useEffect(() => {
        handlePriceRange([minPrice, maxPrice])
    }, [minPrice, maxPrice])
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

    return { dotOne, dotTwo, minPrice, maxPrice, percentageMoveDotOne, percentageMoveDotTwo, sliderRangeRef, setMinPrice, setMaxPrice, setpercentageMoveDotOne, setpercentageMoveDotTwo }
}

export default useSlider;