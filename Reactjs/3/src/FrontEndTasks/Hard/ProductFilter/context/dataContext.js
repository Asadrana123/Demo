import React, { Children, useContext, useReducer, useState } from 'react'
import { createContext } from 'react'
import { initialState } from '../constants/productConstant';
import reducer from '../reducer/productsReducer';
const ProductContext = createContext();
import useUrlOperations from '../hooks/useUpdateUrl';
import { filterProducts } from '../utils/productUtils';
function DataContext({ children }) {
    const { convertParamstoFilter } = useUrlOperations()
    let newFilters = convertParamstoFilter(initialState.filters);
    const [state, dispatch] = useReducer(reducer, { ...initialState, filteredProducts: filterProducts(initialState.filteredProducts, newFilters), filters: newFilters });
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

function useDataContext() {
    const { state, dispatch } = useContext(ProductContext);
    return { state, dispatch };
}

export { useDataContext, DataContext };