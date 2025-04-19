// const products = [
//   { name: "iPhone 15", price: 80000, category: "Mobiles", inStock: true },
//   { name: "Dell XPS", price: 95000, category: "Laptops", inStock: false },
//   { name: "MacBook Air", price: 120000, category: "Laptops", inStock: true },
//   { name: "Dell Inspiron", price: 70000, category: "Laptops", inStock: true },
//   { name: "Boat Earbuds", price: 1500, category: "Accessories", inStock: true }
// ];
// const result=products.filter((product)=>product.category==='Laptops'&&product.inStock===true&&product.price>95000)
// console.log(result); 

function filterProducts(products, filters) {
    return products.filter(product =>
      filters.every(testFn => testFn(product)) 
    );
  }
  
const isCategory = category => product => product.category === category;
const isUnderPrice = price => product => product.price < price;
const isInStock = product => product.inStock === true;
const products = [
    { name: "iPhone 15", price: 80000, category: "Mobiles", inStock: true },
    { name: "Dell XPS", price: 95000, category: "Laptops", inStock: false },
    { name: "MacBook Air", price: 120000, category: "Laptops", inStock: true },
    { name: "Dell Inspiron", price: 70000, category: "Laptops", inStock: true },
    { name: "Boat Earbuds", price: 1500, category: "Accessories", inStock: true }
  ];

  // Active filters (could come from user input in UI)
const activeFilters = [
    isCategory("Laptops"),
    isUnderPrice(80000),
    isInStock
  ];
  
const filteredProducts = filterProducts(products, activeFilters);
  
console.log(filteredProducts);
  