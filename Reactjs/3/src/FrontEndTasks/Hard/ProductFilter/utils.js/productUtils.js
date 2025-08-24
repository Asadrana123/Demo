export const getStarWidths = (index, value) => {
    const integerPart = Math.floor(value);
    const decimalPart = Number((value - integerPart).toFixed(2));
    if (index < integerPart) return 100;
    else if (index === integerPart) {
        console.log('in decimal part', decimalPart * 100);
        return decimalPart * 100;
    }
    else return 0;
}