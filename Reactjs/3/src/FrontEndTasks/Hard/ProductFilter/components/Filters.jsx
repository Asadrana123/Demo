import React from 'react'
import './Filters.css';
import { brands, categories } from '../constants/productConstant';
//  priceRange:[MIN_PRICE,MAX_PRICE],
//         brands:[],
//         category:[],
//         minRating:0,
//         hasDiscount:false,
function Filters() {
    console.log(brands, categories);
    return (
        <div className='filters-container'>
            <div className='filter'>
                Brands
                <div className='dropdown'>
                    {brands?.map((brand, index) => {
                        return <div key={index} >{brand}</div>
                    })}
                </div>
            </div>
            <div className='filter'>
                Brands
                <div className='dropdown'>
                    {categories?.map((brand, index) => {
                        return <div key={index}>{brand}</div>
                    })}
                </div>
            </div>
            <div className='filter'>
                <input type='range' min='1' max='5' step='.5' />
            </div>
            <div className='filter'>
                <input type='checkbox' />
            </div>
        </div>
    )
}

export default Filters