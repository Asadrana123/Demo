import React from 'react'
import './Navbar.css'
import { Search } from "lucide-react";
import useSearch from '../hooks/useSearch';
function Navbar() {
    const {searchTerm,handleSearch}=useSearch();
    return (
        <div className='navbar-container'>
            <div className='search-container'>
                <input
                      value={searchTerm}
                      onChange={handleSearch}
                      placeholder='Search items here'
                />
                <Search/>
            </div>
        </div>
    )
}

export default Navbar