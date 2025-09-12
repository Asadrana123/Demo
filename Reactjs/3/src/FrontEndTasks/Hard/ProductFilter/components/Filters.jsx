import React from 'react'
import './Filters.css';
import { brands, categories } from '../helpers/helpers';
import { sortByContent } from '../constants/filtersConstant';
import useFilter from '../hooks/useFilter';
import Slider from './Slider';
import FilterDropdown from './FilterDropdown';
import { useFilteredProductsProvider } from '../context/dataContext';
function Filters({ smallFiltersVisible }) {
    const { handleDiscount, handleReset, handleSelectSortContent, width, filters, openDropdown, handleFilterClick } = useFilter();
    return (
        <div style={{ transform: smallFiltersVisible ? 'translateX(0%)' : width <= 1180 ? 'translateX(-110%)' : '' }} className='filters-container'>
            <FilterDropdown currentFilters={filters?.brands} filterName='Brands' filterList={brands} />
            <FilterDropdown currentFilters={filters?.categories} filterName='Categories' filterList={categories} />
            <div className='filter'>
                <Slider />
            </div>
            <div className='filter'>
                <label>Contains Discount</label>
                <input onChange={(e) => {
                    handleDiscount(e.target.checked)
                }} checked={filters.hasDiscount} type='checkbox' />
            </div>
            <div onClick={() => handleFilterClick('sort-by')} className='filter'>
                Sort
                <div style={{ display: openDropdown === 'sort-by' ? '' : 'none' }} className='dropdown'>
                    {sortByContent?.map((sortContent, index) => {
                        return <div style={{ backgroundColor: filters.sortBy === sortContent ? "#d9e5fc" : "" }}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSelectSortContent(sortContent)
                            }} className='filter-item' key={index} >{sortContent}</div>
                    })}
                </div>
            </div>
            <NumberOfProducts />
            <div onClick={handleReset} className='filter'>
                Reset
            </div>
        </div >
    )
}

const NumberOfProducts = () => {
    const filteredProducts = useFilteredProductsProvider();
    return <div className='filter'>No. of Products: {filteredProducts.length}</div>
}

export default Filters