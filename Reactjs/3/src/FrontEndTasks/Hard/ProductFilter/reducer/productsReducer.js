
import { filterProducts, filterByBrand, searchResult, filterByCategory, filterByPriceRange, filterByDiscount, resetProducts, sortProducts } from "../utils/productUtils.js";
import { BRANDS, SEARCH, CATEGORIES, PRICE_RANGE, DISCOUNT, SORT, ALL_FILTERS, RESET } from "../constants/filtersConstant.js";
export default function reducer(state, action) {
    let result, searchedResult;
    switch (action.type) {
        case SEARCH:
            searchedResult = searchResult(state.products, action.payload.searchTerm);
            result = filterProducts(searchedResult, state.filters);
            return {
                ...state,
                isReset: false,
                searchedResult,
                filteredProducts: result,
            }
        case BRANDS:
            console.log(state.filters);
            result = filterByBrand(state.searchedResult, action.payload.item, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.filteredByBrands,
                filters: result.filters,
            }
        case CATEGORIES:
            result = filterByCategory(state.searchedResult, action.payload.item, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.filteredByCategories,
                filters: result.filters,
            }
        case PRICE_RANGE:
            result = filterByPriceRange(state.searchedResult, action.payload.value, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.filteredByPriceRanges,
                filters: result.filters,
            }
        case DISCOUNT:
            result = filterByDiscount(state.searchedResult, action.payload.value, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.filteredByDiscount,
                filters: result.filters,
            }
        case SORT:
            result = sortProducts(state.filteredProducts, action.payload.value, state.filters);
            return {
                ...state,
                isReset: false,
                filteredProducts: result.sortedProducts,
                filters: result.filters,
            }
        case ALL_FILTERS:
            result = filterProducts(state.products, state.filters, ALL_FILTERS);
            return {
                ...state,
                filteredProducts: result,
            }
        case RESET:
            return resetProducts();
    }
}