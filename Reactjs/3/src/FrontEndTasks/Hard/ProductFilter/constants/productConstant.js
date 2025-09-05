import { data } from "../data/data"
import { fetchFiltersData } from "../utils/productUtils.js"
import { calculatePriceFromSliderPosition } from "../helpers/helpers"

export const MIN_PRICE = 0;
export const MAX_PRICE = 10000

export const initialDotOnePosition = 0;
export const initialDotTwoPosition = 100

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


export const brands = fetchFiltersData(data, 'brand');
export const categories = fetchFiltersData(data, 'category');
export const sortByContent = ['Sort by Price', 'Sort by Rating']



