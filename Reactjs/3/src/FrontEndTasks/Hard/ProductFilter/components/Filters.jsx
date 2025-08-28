import React, { useEffect, useRef, useState } from 'react'
import './Filters.css';
import { brands, categories } from '../constants/productConstant';
import useFilter from '../hooks/useFilter';
import { useDataContext } from '../context/dataContext';
import Slider from './Slider';
function Filters() {
    const { state } = useDataContext();
    const [openDropdown, setOpenSetDropdown] = useState('none');
    const { handleSelectBrand, handleSelectCategory } = useFilter();
    const handleOpen = (name) => {
        setOpenSetDropdown((prev) => {
            if (prev === name) return 'none';
            else return name;
        })
    }
    return (
        <div className='filters-container'>
            <div onClick={() => handleOpen('brands')} className='filter'>
                Brands
                <div style={{ display: openDropdown === 'brands' ? '' : 'none' }} className='dropdown'>
                    {brands?.map((brand, index) => {
                        return <div style={{ backgroundColor: state.filters.brands.includes(brand) ? "#d9e5fc" : "" }} onClick={(e) => {
                            e.stopPropagation();
                            handleSelectBrand(brand)
                        }} className='filter-item' key={index} >{brand}</div>
                    })}
                </div>
            </div>
            <div onClick={() => handleOpen('categories')} className='filter'>
                Categories
                <div style={{ display: openDropdown === 'categories' ? '' : 'none' }} className='dropdown'>
                    {categories?.map((category, index) => {
                        return <div
                            style={{ backgroundColor: state.filters.categories.includes(category) ? "#d9e5fc" : "" }}
                            onClick={(e) => {
                                e.stopPropagation()
                                handleSelectCategory(category)
                            }} className='filter-item' key={index}>
                            {category}</div>
                    })}
                </div>
            </div>
            <div className='filter'>
                    <Slider />
            </div>
            <div className='filter'>
                <label>Contains Discount</label>
                <input type='checkbox' />
            </div>
        </div >
    )
}

export default Filters