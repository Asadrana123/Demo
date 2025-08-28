import { data } from "../data/data"
import { fetchFiltersData } from "../utils.js/productUtils"


const MIN_PRICE=100
const MAX_PRICE=10000

export const intialState={
    products:data,
    filteredProducts:data,
    searchedResult:data,
    filters:{
        search:'',
        priceRange:[MIN_PRICE,MAX_PRICE],
        brands:[],
        categories:[],
        minRating:0,
        hasDiscount:false,
    },
    sortBy:'none',
}


export const brands=fetchFiltersData(data,'brand');
console.log(brands);
export const categories=fetchFiltersData(data,'category');

