import React from 'react'
import useFilter from '../hooks/useFilter'
import { useDataContext } from '../context/dataContext';
import './CardsContainer.css'
import ProductCard from './ProductCard';
function CardsContainer() {
    const { state } = useDataContext();
    return (
        <>
            <div className='cards-container'>
                {state.filteredProducts?.map((product, _) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            {state.filteredProducts.length === 0 &&
                <div className='no-mathces'>
                    We couldn't find any matches!
                </div>
            }
        </>
    )
}

export default CardsContainer