import { data } from "../data/data.js"
import { calculatePriceFromSliderPosition } from "../helpers/helpers.js"
import { initialDotOnePosition,initialDotTwoPosition } from "../constants/sliderConstant.js"
export const initialState = {
    products: data,
    filteredProducts: data,
    searchedResult: data,
    isReset: true,
    filters: {
        search: '',
        priceRange: [calculatePriceFromSliderPosition(initialDotOnePosition), calculatePriceFromSliderPosition(initialDotTwoPosition)],
        brands: [],
        categories: [],
        minRating: 0,
        hasDiscount: false,
        sortBy: 'none',
    },
}