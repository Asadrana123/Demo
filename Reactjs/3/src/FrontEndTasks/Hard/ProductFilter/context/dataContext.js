import React, { useContext, useEffect, useReducer, useMemo } from 'react'
import { createContext } from 'react'
import { initialState } from '../reducer/initialState.js';
import reducer from '../reducer/productsReducer';
import { ALL_FILTERS } from '../constants/filtersConstant';
const StateContext = createContext();
const DispatchContext = createContext();
import useUrlOperations from '../hooks/useUpdateUrl';
import { filterProducts } from '../utils/productUtils';
function ProductProivder({ children }) {
    const { convertParamstoFilter, convertFiltertoParams } = useUrlOperations()
    const newFilters = useMemo(() => convertParamstoFilter(initialState.filters), []);
    const filteredProducts = useMemo(() => filterProducts(initialState.filteredProducts, newFilters, ALL_FILTERS), []);
    const [state, dispatch] = useReducer(reducer, { ...initialState, filteredProducts: [...filteredProducts], filters: { ...newFilters } });
    useEffect(() => {
        convertFiltertoParams(state.filters)
    }, [state.filters])
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}



function useStateProvider() {
    const state= useContext(StateContext);
    return {state}
}

function useDispatchProvider() {
    return useContext(DispatchContext)
}

export { useStateProvider, useDispatchProvider, ProductProivder };

