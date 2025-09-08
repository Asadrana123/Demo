
import { filterProducts, filterByBrand, searchResult, filterByCategory, filterByPriceRange, filterByDiscount, resetProducts, sortProducts } from "../utils/productUtils.js";
export default function reducer(state, action) {
    let result, searchedResult, filteredProducts;
    switch (action.type) {
        case 'SEARCH':
            searchedResult = searchResult(state.products, action.payload.searchTerm);
            filteredProducts = filterProducts(searchedResult, state.filters);
            return {
                ...state,
                isReset: false,
                searchedResult,
                filteredProducts,
                searchedResult
            }
        case 'BRANDS':
            result = filterByBrand(state.searchedResult, action.payload.item, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.filteredByBrands,
                filters: result.filters,
            }
        case 'CATEGORIES':
            result = filterByCategory(state.searchedResult, action.payload.item, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.filteredByCategories,
                filters: result.filters,
            }
        case 'PRICE_RANGE':
            result = filterByPriceRange(state.searchedResult, action.payload.value, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.filteredByPriceRanges,
                filters: result.filters,
            }
        case 'DISCOUNT':
            result = filterByDiscount(state.searchedResult, action.payload.value, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.filteredByDiscount,
                filters: result.filters,
            }
        case 'SORT':
            result = sortProducts(state.filteredProducts, action.payload.value, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.sortedProducts,
                filters: result.filters,
            }
        case 'FILTER':
            result = filterProducts(state.filteredProducts, action.payload.filters);
            return {
                ...state,
                filteredProducts: result,
                filters: action.payload.filters
            }
        case 'RESET':
            return resetProducts();
    }
}