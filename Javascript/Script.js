const products = [
    { name: "iPhone 15", price: 80000, category: "Mobiles", inStock: true },
    { name: "Dell XPS", price: 95000, category: "Laptops", inStock: false },
    { name: "MacBook Air", price: 120000, category: "Laptops", inStock: true },
    { name: "Dell Inspiron", price: 70000, category: "Laptops", inStock: true },
    { name: "Boat Earbuds", price: 1500, category: "Accessories", inStock: true }
  ];

function isCategory(category){
         return function(product){
                return product.category===category;
         }
}
function isInStock(category){
    return function(product){
           return product.inStock===true;
    }
}
function minPrice(price){
     return function(product){
        return product.price>=price
     }
}
const filters=[
    isCategory('Laptops'),
    isInStock(true),
    minPrice(95000)
]

const result=products.filter((product)=>filters.every((filter)=>filter(product))
)
console.log(result);