import { MAX_PRICE } from "../constants/productConstant";
export const calculatePriceFromSliderPosition = (percentageValue) => {
    percentageValue = percentageValue > 0 && percentageValue < 1 ? 0 : percentageValue > 99 && percentageValue < 100 ? 100 : percentageValue
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
    return (mouseX - intialPointX) / (endPointX - intialPointX) * 100;
}

export const setDotPositionOne = (mouseX, intialPointX, endPointX, setpercentageDotPosition, dotTwoLeft, setMinPrice) => {
    if (isMouseXPositionUnderSlider(mouseX, intialPointX, endPointX)) {
        let position = calculateDotPosition(mouseX, intialPointX, endPointX);
        let limit = calculateDotPosition(dotTwoLeft, intialPointX, endPointX) - 10
        if (position < limit) {
            setpercentageDotPosition(position);
            setMinPrice(calculatePriceFromSliderPosition(position));
        }
    }
}

export const setDotPositionTwo = (mouseX, intialPointX, endPointX, setpercentageDotPosition, dotOneLeft, setMaxPrice) => {
    if (isMouseXPositionUnderSlider(mouseX, intialPointX, endPointX)) {
        let position = calculateDotPosition(mouseX, intialPointX, endPointX);
        let limit = calculateDotPosition(dotOneLeft, intialPointX, endPointX) + 10
        if (position > limit) {
            setpercentageDotPosition(position);
            setMaxPrice(calculatePriceFromSliderPosition(position));
        }
    }
}


export const handleKeyDownDotOne = (e, setDotPositionOne, percentageMoveDotOne, percentageMoveDotTwo, setMinPrice) => {
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
    setMinPrice(calculatePriceFromSliderPosition(newPosition))
}


export const handleKeyDownDotTwo = (e, setDotPositionTwo, percentageMoveDotTwo, percentageMoveDotOne, setMaxPrice) => {
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
    setMaxPrice(calculatePriceFromSliderPosition(newPosition))
}
