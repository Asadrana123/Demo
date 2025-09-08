import React, { useState } from 'react'
import { useDataContext } from '../context/dataContext';
import { NO_OF_PRODUCTS_PER_PAGE } from '../constants/productConstants';
import './CardsContainer.css'
import ProductCard from './ProductCard';
function CardsContainer() {
    const { state: { filteredProducts } } = useDataContext();
    console.log(filteredProducts.length/NO_OF_PRODUCTS_PER_PAGE)
    const [pageNumber, setPageNumber] = useState(0);
    const calculateStartIndex = () => pageNumber * NO_OF_PRODUCTS_PER_PAGE
    const calculateEndIndex = () => pageNumber * NO_OF_PRODUCTS_PER_PAGE + NO_OF_PRODUCTS_PER_PAGE
    const calculateNumberOfPage = () => filteredProducts.length % NO_OF_PRODUCTS_PER_PAGE === 0 ? filteredProducts.lenght / NO_OF_PRODUCTS_PER_PAGE : filteredProducts.length / NO_OF_PRODUCTS_PER_PAGE + 1;
    return (
        <>
            <div className='cards-container'>
                {filteredProducts.slice(calculateStartIndex(), calculateEndIndex())?.map((product, _) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            {filteredProducts.length === 0 &&
                <div className='no-mathces'>
                    We couldn't find any matches!
                </div>
            }
            <div className='page-number-controller'>
                <div>Page No. {pageNumber}</div>
                <div onClick={() => setPageNumber(prev => prev === 0 ? prev : prev - 1)}>Previos Page</div>
                <div onClick={() => setPageNumber(prev => prev === Math.floor(calculateNumberOfPage()-1) ? prev : prev + 1)} >Next Page</div>
                <div>Total Pages - {Math.floor(calculateNumberOfPage()-1)}</div>
            </div>
        </>
    )
}

export default CardsContainer