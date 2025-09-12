import React from 'react'
import './ProductCard.css'
import StarRating from './StarRating'
function ProductCard({ isNew, name, brand, price, originalPrice, discount, rating }) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                {isNew && <img loading='lazy' className='new-product-badge'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6uSAmV8y6fNTfgveyCTSRfR0gym63nNggA&s' />
                }
                <img loading='lazy' alt='Product Image' src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png" /> </div>

            <div className='product-detail-container'>
                <h4>{name}</h4>
                <h5>{brand}</h5>

                <div className='price-container'>
                    <span className='current-price'>Rs. {price}</span>
                    <span className='original-price'>Rs. {originalPrice}</span>
                    <span className='discount'>{discount}% off</span>
                </div>

                <div>
                    <StarRating value={rating} />
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProductCard)