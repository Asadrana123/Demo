import React, { Children, useContext, useReducer, useState } from 'react'
import { createContext } from 'react'
import { initialState } from '../constants/productConstant';
import reducer from '../reducer/productsReducer';
const ProductContext = createContext()
function DataContext({ children }) {
    const [state, dispatch] = useReducer(reducer,initialState);
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

function useDataContext() {
    const {state,dispatch} = useContext(ProductContext);
    return {state,dispatch};
}

export { useDataContext, DataContext };