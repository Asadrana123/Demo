import { MAX_PRICE } from "../constants/productConstant";
export const calulatePriceFromSliderPosition = (percentageValue) => {
    percentageValue = percentageValue > 0 && percentageValue < 1 ? 0 : percentageValue > 99 && percentageValue < 100 ? 100 : percentageValue
    percentageValue = Math.floor(percentageValue);
    const value = Math.floor((MAX_PRICE) * percentageValue / 100);
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
            setMinPrice(calulatePriceFromSliderPosition(position));
        }
    }
}

export const setDotPositionTwo = (mouseX, intialPointX, endPointX, setpercentageDotPosition, dotOneLeft, setMaxPrice) => {
    if (isMouseXPositionUnderSlider(mouseX, intialPointX, endPointX)) {
        let position = calculateDotPosition(mouseX, intialPointX, endPointX);
        let limit = calculateDotPosition(dotOneLeft, intialPointX, endPointX) + 10
        if (position > limit) {
            setpercentageDotPosition(position);
            setMaxPrice(calulatePriceFromSliderPosition(position));
        }
    }
}
