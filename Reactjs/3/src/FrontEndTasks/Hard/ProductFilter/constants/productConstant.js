import { data } from "../data/data"
import { fetchParticulerData } from "../utils.js/productUtils"


const MIN_PRICE=100
const MAX_PRICE=10000

export const intialState={
    products:data,
    filteredProducts:data,
    filters:{
        search:'',
        priceRange:[MIN_PRICE,MAX_PRICE],
        brands:[],
        category:[],
        minRating:0,
        hasDiscount:false,
    },
    sortBy:'none',
}


export const brands=fetchParticulerData(data,'brand');
console.log(brands);
export const categories=fetchParticulerData(data,'category');

