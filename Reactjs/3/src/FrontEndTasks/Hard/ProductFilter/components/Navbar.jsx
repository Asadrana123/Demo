import React from 'react'
import './Navbar.css'
import { Search, Menu } from "lucide-react";
import useSearch from '../hooks/useSearch';
import useWindowSize from '../hooks/useWindowSize';
function Navbar({ setSmallFiltersVisible, smallFiltersVisible }) {
    const { searchTerm, handleSearch } = useSearch();
    const width = useWindowSize();
    return (
        <div className='navbar-container'>
            {width < 1180 && 
            <div onClick={() => {
                setSmallFiltersVisible(prev => !prev)
            }} >
                {smallFiltersVisible ?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> : <Menu />}
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

export default Navbar