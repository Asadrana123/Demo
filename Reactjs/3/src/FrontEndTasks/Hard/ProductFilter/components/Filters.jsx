import React, { useEffect, useRef, useState } from 'react'
import './Filters.css';
import { brands, categories, sortByContent } from '../constants/productConstant';
import useFilter from '../hooks/useFilter';
import { useDataContext } from '../context/dataContext';
import Slider from './Slider';
import useWindowSize from '../hooks/useWindowSize';
function Filters({ smallFiltersVisible }) {
    const { state } = useDataContext();
    const [openDropdown, setOpenSetDropdown] = useState('none');
    const width = useWindowSize();
    const { handleSelectBrand, handleSelectCategory, handleDiscount, handleReset, handleSelectSortContent } = useFilter();
    const handleOpen = (name) => {
        setOpenSetDropdown((prev) => {
            if (prev === name) return 'none';
            else return name;
        })
    }
    return (
        <div style={{ transform: smallFiltersVisible ? 'translateX(0%)' : width <= 1180 ? 'translateX(-110%)' : '' }} className='filters-container'>
            <div onClick={() => handleOpen('brands')} className='filter'>
                Brands
                <div style={{ display: openDropdown === 'brands' ? '' : 'none' }} className='dropdown'>
                    {brands?.map((brand, index) => {
                        return <div style={{ backgroundColor: state.filters.brands.includes(brand) ? "#d9e5fc" : "" }} 
                        onClick={(e) => {
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
                <input onChange={(e) => {
                    handleDiscount(e.target.checked)
                }} checked={state.filters.hasDiscount} type='checkbox' />
            </div>
            <div onClick={() => handleOpen('sort-by')} className='filter'>
                Sort
                <div style={{ display: openDropdown === 'sort-by' ? '' : 'none' }} className='dropdown'>
                    {sortByContent?.map((sortContent, index) => {
                        return <div style={{ backgroundColor: state.sortBy === sortContent ? "#d9e5fc" : "" }} onClick={(e) => {
                            e.stopPropagation();
                            handleSelectSortContent(sortContent)
                        }} className='filter-item' key={index} >{sortContent}</div>
                    })}
                </div>
            </div>
            <div className='filter'>
                No. of Products: {state.filteredProducts.length}
            </div>
            <div onClick={handleReset} className='filter'>
                Reset
            </div>
        </div >
    )
}

export default Filters