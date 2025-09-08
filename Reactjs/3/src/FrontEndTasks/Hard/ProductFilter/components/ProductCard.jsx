import React from 'react'
import './ProductCard.css'
import StarRating from './StarRating'
const ProductCard = React.memo(({ product }) => {
    return (
        <div className='card-container'>
            <div className='image-container'>
                {product.isNew && <img loading='lazy' className='new-product-badge' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6uSAmV8y6fNTfgveyCTSRfR0gym63nNggA&s' />}
                <img loading='lazy' alt='Product Image' src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png" />
            </div>
            <div className='product-detail-container'>
                <h4>{product.name}</h4>
                <h5>{product.brand}</h5>
                <div className='price-container'>
                    <span className='current-price'>Rs. {product.price}</span>
                    <span className='original-price'>Rs. {product.originalPrice}</span>
                    <span className='discount'>{product.discount}% off</span>
                </div>
                <div>
                    <StarRating value={product.rating} />
                </div>
            </div>
        </div>
    )
})
ProductCard.displayName='ProductCard'
export default ProductCard