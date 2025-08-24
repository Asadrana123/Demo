import React from 'react'
import useFilter from '../hooks/useFilter'
import './CardsContainer.css'
import ProductCard from './ProductCard';
function CardsContainer() {
    const { products } = useFilter();
    return (
        <div className='cards-container'>
            {products?.map((product, index) => {
                return <ProductCard key={product.id} product={product} />
            })}
        </div>
    )
}

export default CardsContainer