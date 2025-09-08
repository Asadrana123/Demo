import { MAX_PRICE } from "../constants/filtersConstant.js";
import { sliderDebounceTime } from "../constants/sliderConstant";
export const calculatePriceFromSliderPosition = (percentageValue) => {
    percentageValue = Math.floor(percentageValue);
    const value = Math.floor((MAX_PRICE) * percentageValue / 100);
    return value;
}

export const calculateSliderPositionFromPrice = (price) => {
    const value = Math.floor((price / MAX_PRICE) * 100);
    return value;
}


const isMouseXPositionUnderSlider = (mouseX, intialPointX, endPointX) => {
    if (!mouseX || mouseX < 0 || intialPointX > mouseX || endPointX < mouseX) return false;
    return true;
}

const calculateDotPosition = (mouseX, intialPointX, endPointX) => {
    let value = (mouseX - intialPointX) / (endPointX - intialPointX) * 100;
    return value > 99 && value < 100 ? 100 : value > 0 && value < 1 ? 0 : value
}

export const setDotPositionOne = (debounceSlider, mouseX, intialPointX, endPointX, setpercentageDotPosition, dotTwoLeft, handlePriceRange, priceRange) => {
    if (isMouseXPositionUnderSlider(mouseX, intialPointX, endPointX)) {
        let position = calculateDotPosition(mouseX, intialPointX, endPointX);
        let limit = calculateDotPosition(dotTwoLeft + 12, intialPointX, endPointX) - 4
        console.log(position,mouseX,intialPointX);
        if (position < limit) {
            setpercentageDotPosition(position);
            clearTimeout(debounceSlider.current);
            debounceSlider.current = setTimeout(() => {
                handlePriceRange([calculatePriceFromSliderPosition(position), priceRange[1]]);
            }, sliderDebounceTime)
        }
    }
}

export const setDotPositionTwo = (debounceSlider, mouseX, intialPointX, endPointX, setpercentageDotPosition, dotOneLeft, handlePriceRange, priceRange) => {
    if (isMouseXPositionUnderSlider(mouseX, intialPointX, endPointX)) {
        let position = calculateDotPosition(mouseX, intialPointX, endPointX);
        let limit = calculateDotPosition(dotOneLeft, intialPointX, endPointX) + 4
        if (position > limit) {
            setpercentageDotPosition(position);
            clearTimeout(debounceSlider.current);
            debounceSlider.current = setTimeout(() => {
                handlePriceRange([priceRange[0], calculatePriceFromSliderPosition(position)]);
            }, sliderDebounceTime)
        }
    }
}


export const handleKeyDownDotOneHelper = (debounceSlider, e, setDotPositionOne, percentageMoveDotOne, percentageMoveDotTwo, handlePriceRange) => {
    let newPosition = percentageMoveDotOne;
    switch (e.key) {
        case 'ArrowRight':
            newPosition = percentageMoveDotOne + 10 >= percentageMoveDotTwo ? percentageMoveDotOne : percentageMoveDotOne + 5;
            break;
        case 'ArrowLeft':
            newPosition = percentageMoveDotOne - 5 <= 0 ? 0 : percentageMoveDotOne - 5;
            break;
        case 'default':
            return;
    }
    setDotPositionOne(newPosition);
    clearTimeout(debounceSlider.current);
    debounceSlider.current = setTimeout(() => {
        handlePriceRange([calculatePriceFromSliderPosition(position), priceRange[1]]);
    }, sliderDebounceTime)
}


export const handleKeyDownDotTwoHelper = (debounceSlider, e, setDotPositionTwo, percentageMoveDotTwo, percentageMoveDotOne, handlePriceRange) => {
    let newPosition = percentageMoveDotTwo;
    switch (e.key) {
        case 'ArrowRight':
            newPosition = percentageMoveDotTwo + 5 >= 100 ? 100 : percentageMoveDotTwo + 5;
            break;
        case 'ArrowLeft':
            newPosition = percentageMoveDotTwo - 10 <= percentageMoveDotOne ? percentageMoveDotTwo : percentageMoveDotTwo - 5;
            break;
        case 'default':
            return;
    }
    setDotPositionTwo(newPosition);
    clearTimeout(debounceSlider.current);
    debounceSlider.current = setTimeout(() => {
        handlePriceRange([calculatePriceFromSliderPosition(position), priceRange[1]]);
    }, sliderDebounceTime)
}
