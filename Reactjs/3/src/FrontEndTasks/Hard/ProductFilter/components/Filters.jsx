import React from 'react'
import './Filters.css';
import { brands, categories } from '../helpers/helpers';
import { sortByContent } from '../constants/filtersConstant';
import useFilter from '../hooks/useFilter';
import Slider from './Slider';
import FilterDropdown from './FilterDropdown';
function Filters({ smallFiltersVisible }) {
    const { handleDiscount, handleReset, handleSelectSortContent, handleFilterClick, openDropdown, handleFilterSelect,width,filters,totalProducts } = useFilter();
    return (
        <div style={{ transform: smallFiltersVisible ? 'translateX(0%)' : width <= 1180 ? 'translateX(-110%)' : '' }} className='filters-container'>
            <FilterDropdown currentFilters={filters?.brands} filterName='Brands' filterList={brands} handleFilterClick={handleFilterClick} openDropdown={openDropdown} handleFilterSelect={handleFilterSelect} />
            <FilterDropdown currentFilters={filters?.categories} filterName='Categories' filterList={categories} handleFilterClick={handleFilterClick} openDropdown={openDropdown} handleFilterSelect={handleFilterSelect} />
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
                        return <div style={{ backgroundColor: filters.sortBy === sortContent ? "#d9e5fc" : "" }} onClick={(e) => {
                            e.stopPropagation();
                            handleSelectSortContent(sortContent)
                        }} className='filter-item' key={index} >{sortContent}</div>
                    })}
                </div>
            </div>
            <div className='filter'>
                No. of Products: {totalProducts}
            </div>

            <div onClick={handleReset} className='filter'>
                Reset
            </div>
        </div >
    )
}

export default Filters