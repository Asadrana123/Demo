import React, { Children, useContext, useEffect, useReducer, useRef, useMemo } from 'react'
import { createContext } from 'react'
import { initialState } from '../constants/productConstant';
import reducer from '../reducer/productsReducer';
const ProductContext = createContext();
import useUrlOperations from '../hooks/useUpdateUrl';
import { filterProducts } from '../utils/productUtils';
function DataContext({ children }) {
    const { convertParamstoFilter, convertFiltertoParams } = useUrlOperations()
    const newFilters = useMemo(() => convertParamstoFilter(initialState.filters), []);
    const filteredProducts = useMemo(() => filterProducts(initialState.filteredProducts, newFilters), []);
    const [state, dispatch] = useReducer(reducer, { ...initialState, filteredProducts: [...filteredProducts], filters: { ...newFilters } });
    useEffect(() => {
        console.log('hi');
        convertFiltertoParams(state.filters)
    }, [state.filters])
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

