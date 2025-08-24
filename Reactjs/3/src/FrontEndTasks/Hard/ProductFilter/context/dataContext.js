import React from 'react'
import { createContext } from 'react'
import { products } from '../data/products'
const productContext = createContext(products)
function DataContext() {
    return (
        <div>
            dataContext
        </div>
    )
}

export default DataContext