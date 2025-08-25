export const getStarWidths = (index, value) => {
    const integerPart = Math.floor(value);
    const decimalPart = Number((value - integerPart).toFixed(2));
    if (index < integerPart) return 100;
    else if (index === integerPart) {
        return decimalPart * 100;
    }
    else return 0;
}

export const filterProducts = (products, searchTerm, state) => {
    return products.filter((product, _) => {
        let flag = true;
        flag = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
        if (flag === false) return false;
        if (product.price < state.filters.priceRange[0] && product.price > state.filters.priceRange[1]) return false;

    })
}

export const fetchParticulerData = (products, type) => {
    return [new Set(products.map((product) => {
        if (type === 'brand') return product.brand;
        if (type === 'category') return product.category;
    }))]
}
//  {
//         id: 1,
//         name: "Casual Cotton T-Shirt",
//         brand: "Roadster",
//         category: "T-Shirts",
//         price: 799,
//         originalPrice: 1299,
//         rating: 4.2,
//         reviewCount: 156,
//         image: "https://example.com/tshirt1.jpg",
//         discount: 38,
//         isNew: false,
//         tags: ["cotton", "casual", "summer"]
//     },