import React, { useEffect, useState } from 'react'
import { useFilteredProductsProvider } from '../context/dataContext';
import { PAGINATION } from '../constants/appConstants';
import './CardsContainer.css'
import ProductCard from './ProductCard';
function CardsContainer() {
    const filteredProducts = useFilteredProductsProvider();
    if (!filteredProducts || !Array.isArray(filteredProducts)) {
        return <div className="error-state">Unable to load products. Please refresh the page.</div>;
    }
    console.log('in cards container');
    const [pageNumber, setPageNumber] = useState(PAGINATION.INITIAL_PAGE);
    useEffect(() => {
        setPageNumber(PAGINATION.INITIAL_PAGE)
    }, [filteredProducts])
    const totalProducts = filteredProducts.length;
    const calculateStartIndex = () => {
        const safePageNumber = Number.isFinite(pageNumber) && pageNumber >= 0 ? pageNumber : 0;
        return safePageNumber * PAGINATION.PRODUCTS_PER_PAGE;
    };
    const calculateEndIndex = () => {
        const safePageNumber = Number.isFinite(pageNumber) && pageNumber >= 0 ? pageNumber : 0;
        return safePageNumber * PAGINATION.PRODUCTS_PER_PAGE + PAGINATION.PRODUCTS_PER_PAGE;
    };

    const calculateNumberOfPage = () => {
        if (!Number.isFinite(totalProducts) || totalProducts <= 0) return 0;
        return Math.ceil(totalProducts / PAGINATION.PRODUCTS_PER_PAGE);
    };

    return (
        <>
            <div className='cards-container'>
                {filteredProducts.slice(calculateStartIndex(), calculateEndIndex())?.map((product) => {
                    return <ProductCard
                        key={product.id}
                        isNew={product.isNew}
                        image={product.image}
                        name={product.name}
                        brand={product.brand}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        discount={product.discount}
                        rating={product.rating}
                    />
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