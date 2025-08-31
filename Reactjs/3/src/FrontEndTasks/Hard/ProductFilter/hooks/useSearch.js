import React, { useEffect, useState, useRef } from 'react'
import { useDataContext } from '../context/dataContext';
function useSearch(debounceTime = 300) {
    const { dispatch } = useDataContext();
    const [searchTerm, setSearchTerm] = useState('');
    const timeOutId = useRef(null)
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value);
        clearTimeout(timeOutId.current);
        timeOutId.current = setTimeout(() => {
            dispatch({ type: 'SEARCH', payload: { searchTerm: e.target.value.trim() } })
        }, debounceTime)
    }
    return { searchTerm, handleSearch };
}

export default useSearch;