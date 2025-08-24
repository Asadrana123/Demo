import React, { Children, useContext, useState } from 'react'
import { createContext } from 'react'
import { data } from '../data/data'
const ProductContext = createContext(products)
function DataContext({ children }) {
    const [productsData, _setProductsData] = useState(products);
    return (
        <ProductContext.Provider value={productsData}>
            {children}
        </ProductContext.Provider>
    )
}

function useDataContext() {
    const products = useContext(ProductContext);
    return products;
}

export { useDataContext, DataContext };