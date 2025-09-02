import React from 'react'
function useUpdateUrl() {
    const params = new URLSearchParams(window.location.search);
    console.log(window.location.search, window.location)
    return { params }
}

export default useUpdateUrl