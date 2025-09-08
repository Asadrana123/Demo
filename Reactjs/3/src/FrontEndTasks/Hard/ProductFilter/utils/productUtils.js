import { initialState } from "../constants/contextConstant";
import { BRANDS, CATEGORIES, DISCOUNT, PRICE_RANGE, ALL_FILTERS } from "../constants/filtersConstant";
export const getStarWidths = (index, value) => {
    const integerPart = Math.floor(value);
    const decimalPart = Number((value - integerPart).toFixed(2));
    if (index < integerPart) return 100;
    else if (index === integerPart) {
        return decimalPart * 100;
    }
    else return 0;
}

export const filterProducts = (products, filters, filterType) => {
    return products.filter((product, _) => {
        if ((filterType === PRICE_RANGE || filterType === ALL_FILTERS) && product.price < filters?.priceRange[0] || product.price > filters?.priceRange[1]) return false;
        if ((filterType === BRANDS || filterType === ALL_FILTERS) && filters.brands.length && !filters.brands.includes(product.brand)) return false;
        if ((filterType === CATEGORIES || filterType === ALL_FILTERS) && filters.categories.length && !filters.categories.includes(product.category)) return false;
        if ((filterType === DISCOUNT || filterType === ALL_FILTERS) && filters.hasDiscount && product.discount === 0) return false;
        return true;

    })
}

export const searchResult = (products, searchTerm) => {
    return products.filter((product, _) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
    })
}

export const fetchFiltersData = (products, type) => {
    return [...new Set(products.map((product) => {
        if (type === 'brand') return product.brand;
        if (type === 'category') return product.category;
    }))]
}

export const filterByBrand = (searchedProducts, selectedBrand, filters) => {
    if (filters.brands.includes(selectedBrand)) {
        const brands = filters.brands.filter(brand => brand !== selectedBrand);
        filters = { ...filters, brands }
    }
    else filters = { ...filters, brands: [...filters.brands, selectedBrand] };
    const filteredByBrands = filterProducts(searchedProducts, filters,BRANDS)
    return { filters, filteredByBrands }
}

export const filterByCategory = (searchedProducts, selectedCategory, filters) => {
    if (filters.categories.includes(selectedCategory)) {
        const categories = filters.categories.filter(brand => brand !== selectedCategory);
        filters = { ...filters, categories }
    }
    else filters = { ...filters, categories: [...filters.categories, selectedCategory] };
    const filteredByCategories = filterProducts(searchedProducts, filters,CATEGORIES)
    return { filters, filteredByCategories }
}

export const filterByPriceRange = (filteredProducts, value, filters) => {
    const newPriceRange = [value[0], value[1]]
    filters = { ...filters, priceRange: newPriceRange }
    const filteredByPriceRanges = filterProducts(filteredProducts, filters, PRICE_RANGE)
    return { filters, filteredByPriceRanges }
}

export const filterByDiscount = (searchedProducts, value, filters) => {
    filters = { ...filters, hasDiscount: value }
    const filteredByDiscount = filterProducts(searchedProducts, filters,DISCOUNT)
    return { filters, filteredByDiscount }
}

export const sortProducts = (products, value, filters) => {
    filters = filters.sortBy === 'none' ? { ...filters, sortBy: value } : value === filters.sortBy ? { ...filters, sortBy: 'none' } : { ...filters, sortBy: value }
    const sortedProducts = [...products].sort((a, b) => {
        if (filters.sortBy === 'Sort by Price') return a.price - b.price;
        else if (filters.sortBy === 'Sort by Rating') return b.rating - a.rating;
    })
    return { filters, sortedProducts }
}


export const resetProducts = () => initialState
