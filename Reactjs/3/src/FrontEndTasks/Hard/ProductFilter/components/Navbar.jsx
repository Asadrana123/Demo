import React from 'react'
import './Navbar.css'
import { Search } from "lucide-react";
function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='search-container'>
                <input
                      placeholder='Search items here'
                />
                <Search/>
            </div>
        </div>
    )
}

export default Navbar