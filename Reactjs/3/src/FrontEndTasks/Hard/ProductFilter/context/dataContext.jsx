import React, { useContext, useEffect, useReducer, useMemo } from 'react'
import { createContext } from 'react'
import { initialState } from '../reducer/initialState.js';
import reducer from '../reducer/productsReducer.js';
import { ALL_FILTERS } from '../constants/filtersConstant.js';
const StateContext = createContext();
const FilterContext = createContext()
const DispatchContext = createContext();
import { convertFiltertoParams, convertParamstoFilter } from '../utils/urlUtils.js';
import { filterProducts } from '../utils/productUtils.js';
function ProductProvider({ children }) {
    const newFilters = useMemo(() => convertParamstoFilter(initialState.filters), []);
    const filteredProducts = useMemo(() => filterProducts(initialState.filteredProducts, newFilters, ALL_FILTERS), []);
    const [state, dispatch] = useReducer(reducer, { ...initialState, filteredProducts: [...filteredProducts], filters: { ...newFilters } });
    useEffect(() => {
        convertFiltertoParams(state.filters)
    }, [state.filters])
    const memoizedFilter = useMemo(() => {
        return { filters: state.filters, isReset: state.isReset }
    }, [state.filters, state.isReset])
    return (
        <StateContext.Provider value={state.filteredProducts}>
            <FilterContext.Provider value={memoizedFilter}>
                <DispatchContext.Provider value={dispatch}>
                    {children}
                </DispatchContext.Provider>
            </FilterContext.Provider>
        </StateContext.Provider>
    )
}

const useFilterProvider = () => useContext(FilterContext)

const useFilteredProductsProvider = () =>{
    console.log('in useFilter');
   return useContext(StateContext);
}

const useDispatchProvider = () => useContext(DispatchContext)

export { useFilteredProductsProvider, useDispatchProvider, ProductProvider, useFilterProvider };

