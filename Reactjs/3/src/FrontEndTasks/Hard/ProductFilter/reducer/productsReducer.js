
import { filterProducts, filterByBrand, searchResult, filterByCategory } from "../utils.js/productUtils";
export default function reducer(state, action) {
    let result,searchedResult,filteredProducts;
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
        case 'RESET':
            filteredProducts = filterProducts(state.products, state.filters);
            return {
                ...state,
                searchedResult: state.products,
                filteredProducts,
            }
    }
}