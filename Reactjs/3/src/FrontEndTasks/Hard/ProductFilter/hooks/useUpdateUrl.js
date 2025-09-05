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
            if (key === 'sortBy' && value !== 'none') {
                params.delete(key);
                params.append(key, value);
            }
        }
        if (params.size) window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
        else window.history.replaceState({}, '', window.location.pathname);
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
            if (key === 'sortBy') {
                filters = { ...filters, [key]: value }
            }
        }
        return filters;
    }
    return { convertFiltertoParams, convertParamstoFilter }
}

export default useUrlOperations;


