import React from 'react'
// filters: {
// search: '',
// priceRange: [calculatePriceFromSliderPosition(initialDotOnePosition), calculatePriceFromSliderPosition(initialDotTwoPosition)],
// brands: [],
// categories: [],
// minRating: 0,
// hasDiscount: false,
//     },
function useUrlOperations() {
    const convertFiltertoParams = (filters) => {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(filters)) {
            if (key === 'priceRange') {
                if (value[0] > 0 || value[1] < 10000) params.append(key, `${value[0]}-${value[1]}`);
                else params.delete(key);
            }
            if (key === 'brands' || key === 'categories') {
                if (value.length > 0) value.forEach(item => params.append(key, item));
                else params.delete(key)
            }
            if (key === 'minRating') {
                if (value > 0) params.append(key, value);
                else params.delete(key);
            }
            if (key === 'hasDiscount') {
                if (value) params.append(key, value);
                else params.delete(key)
            }
        }
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    }
    const convertParamstoFilter = (filters) => {
        const params = new URLSearchParams(window.location.search);
        for (const [key, value] of params.entries()) {
            if (key === 'priceRange') {
                filters = { ...filters, [key]: [Number(params.get(key).split('-')[0]), Number(params.get(key).split('-')[1])] }
            }
            if (key === 'brands' || key === 'categories') {
                filters = { ...filters, [key]: params.getAll(key) }
            }
            if (key === 'minRating') {
                filters = { ...filters, [key]: Number(value) }
            }
            if (key === 'hasDiscount') {
                filters = { ...filters, [key]: true }
            }
        }
        return filters;
    }
    return { convertFiltertoParams, convertParamstoFilter }
}

export default useUrlOperations;


