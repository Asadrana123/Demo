import React from 'react'
import { useCallback } from 'react';
import './FilterDropDown.css'
function FilterDropdown({ filterName, filterList, openDropdown, handleFilterSelect, handleFilterClick, currentFilters }) {
    const handleFilterItemClick = useCallback((e) => {
        e.stopPropagation();
        handleFilterSelect(filterName.toUpperCase(), e.target.innerText)
    }, [])
    return (
        <div onClick={() => handleFilterClick(filterName.toLowerCase())} className='filter'>
            {filterName}
            <div
                style={{ display: openDropdown === filterName.toLowerCase() ? '' : 'none' }}
                className='dropdown'>
                {filterList?.map((filterItem, index) => {
                    return <FilterItems backgroundColor={currentFilters.includes(filterItem) ? "#babac9" : ''} key={index} filterItem={filterItem} handleFilterItemClick={handleFilterItemClick} />
                })}
            </div>
        </div>
    )
}


const FilterItems = React.memo(({ backgroundColor, handleFilterItemClick, filterItem }) => {
    console.log(filterItem);
    return <div
        style={{ backgroundColor: backgroundColor ? backgroundColor : '' }}
        onClick={handleFilterItemClick}
        className='filter-item' >
        {filterItem}
    </div>
})


export default React.memo(FilterDropdown)