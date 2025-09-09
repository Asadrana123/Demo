import React, { useEffect, useState } from 'react'
import { useStateProvider } from '../context/dataContext';
import { NO_OF_PRODUCTS_PER_PAGE } from '../constants/productConstants';
import './CardsContainer.css'
import ProductCard from './ProductCard';
function CardsContainer() {
    const { state: { filteredProducts } } = useStateProvider();
    const [pageNumber, setPageNumber] = useState(0);
    useEffect(() => {
        setPageNumber(0)
    }, [filteredProducts])
    const totalProducts = filteredProducts.length;
    const calculateStartIndex = () => {
        const safePageNumber = Number.isFinite(pageNumber) && pageNumber >= 0 ? pageNumber : 0;
        return safePageNumber * NO_OF_PRODUCTS_PER_PAGE;
    };
    const calculateEndIndex = () => {
        const safePageNumber = Number.isFinite(pageNumber) && pageNumber >= 0 ? pageNumber : 0;
        return safePageNumber * NO_OF_PRODUCTS_PER_PAGE + NO_OF_PRODUCTS_PER_PAGE;
    };

    const calculateNumberOfPage = () => {
        if (!Number.isFinite(totalProducts) || totalProducts <= 0) return 0;
        return Math.ceil(totalProducts / NO_OF_PRODUCTS_PER_PAGE);
    };
    return (
        <>
            <div className='cards-container'>
                {filteredProducts.slice(calculateStartIndex(), calculateEndIndex())?.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            {totalProducts === 0 &&
                <div className='no-mathces'>
                    We couldn't find any matches!
                </div>
            }
            {
                totalProducts !== 0 &&
                <div className='page-number-controller'>
                    <div>Page No. {pageNumber}</div>
                    <div onClick={() => setPageNumber(prev => prev === 0 ? prev : prev - 1)}>Previos Page</div>
                    <div onClick={() => setPageNumber(prev => prev === Math.floor(calculateNumberOfPage() - 1) ? prev : prev + 1)} >Next Page</div>
                    <div>Total Pages - {Math.floor(calculateNumberOfPage())}</div>
                </div>
            }

        </>
    )
}

export default CardsContainer