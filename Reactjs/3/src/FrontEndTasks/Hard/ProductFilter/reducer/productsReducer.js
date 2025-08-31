
import { filterProducts, filterByBrand, searchResult, filterByCategory, filterByPriceRange, filterByDiscount } from "../utils.js/productUtils";
export default function reducer(state, action) {
    let result, searchedResult, filteredProducts;
    switch (action.type) {
        case 'SEARCH':
            searchedResult = searchResult(state.products, action.payload.searchTerm);
            filteredProducts = filterProducts(searchedResult, state.filters);
            return {
                ...state,
                searchedResult,
                filteredProducts,
                searchedResult
            }
        case 'BRAND':
            result = filterByBrand(state.searchedResult, action.payload.brand, state.filters);
            return {
                ...state,
                filteredProducts: result.filteredByBrands,
                filters: result.filters,
            }
        case 'CATEGORY':
            result = filterByCategory(state.searchedResult, action.payload.category, state.filters);
            return {
                ...state,
                filteredProducts: result.filteredByCategories,
                filters: result.filters,
            }
        case 'CATEGORY':
            result = filterByPriceRange(state.searchedResult, action.payload.value, action.payload.type, state.filters);
            return {
                ...state,
                filteredProducts: result.filteredByCategories,
                filters: result.filters,
            }
        case 'PRICE_RANGE':
            result = filterByPriceRange(state.searchedResult, action.payload.value, state.filters);
            return {
                ...state,
                filteredProducts: result.filteredByPriceRanges,
                filters: result.filters,
            }
        case 'DISCOUNT':
            result = filterByDiscount(state.searchedResult, action.payload.value, state.filters);
            return {
                ...state,
                filteredProducts: result.filteredByDiscount,
                filters: result.filters,
            }
        case 'RESET':
            filteredProducts = filterProducts(state.products, state.filters);
            return {
                ...state,
                searchedResult: state.products,
                filteredProducts,
            }
    }
}