import React, { useEffect, useState, useRef } from 'react'
import { useDataContext } from '../context/dataContext';
function useSearch(debounceTime = 300) {
    const { dispatch } = useDataContext();
    const [searchTerm, setSearchTerm] = useState('');
    const timeOut = useRef(null)
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value);
        if (e.target.value.trim().length < 3) {
            dispatch({ type: 'RESET' })
            return;
        }
        if (timeOut.current === null || Date.now() - timeOut.current > debounceTime) {
            dispatch({ type: 'SEARCH', payload: { searchTerm: e.target.value.trim() } })
            timeOut.current = Date.now();
        }
    }
    return { searchTerm, handleSearch };
}

export default useSearch;