
import { filterProducts } from "../utils.js/productUtils";
export default function reducer(state, action) {
    switch (action.type) {
        case 'SEARCH':
            const filteredProducts = filterProducts(state.products, action.payload.searchTerm);
            return {
                ...state,
                filteredProducts
            }
        case 'RESET':
            console.log('in reset');
            return {
                ...state,
                filteredProducts: state.products
            }
    }
}