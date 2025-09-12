import React from 'react'
import './Navbar.css'
import { Search, Menu,X } from "lucide-react";
import useSearch from '../hooks/useSearch';
import useWindowSize from '../hooks/useWindowSize';
import { DEBOUNCE_TIMES } from '../constants/appConstants';
function Navbar({ setSmallFiltersVisible, smallFiltersVisible }) {
    const { searchTerm, handleSearch } = useSearch(DEBOUNCE_TIMES.SEARCH);
    const width = useWindowSize();
    return (
        <div className='navbar-container'>
            {width < 1180 &&
                <div onClick={() => {
                    setSmallFiltersVisible(prev => !prev)
                }} >
                    {smallFiltersVisible ?
                        <X /> : <Menu />}
                </div>}
            <div className='search-container'>
                <input
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder='Search items here'
                />
                <Search />
            </div>
        </div>
    )
}

export default React.memo(Navbar)