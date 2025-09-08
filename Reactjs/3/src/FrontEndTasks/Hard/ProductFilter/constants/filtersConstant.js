
import { data } from "../data/data.js"
import { fetchFiltersData } from "../utils/productUtils.js"

export const MIN_PRICE = 0;
export const MAX_PRICE = 10000;

export const brands = fetchFiltersData(data, 'brand');
export const categories = fetchFiltersData(data, 'category');
export const sortByContent = ['Sort by Price', 'Sort by Rating']; 

export const BRANDS = 'BRANDS';
export const CATEGORIES = 'CATEGORIES';
export const DISCOUNT = 'DISCOUNT';
export const PRICE_RANGE = 'PRICE_RANGE';
export const SORT = 'SORT';
export const ALL_FILTERS = 'ALL_FILTERS';
export const RESET = 'RESET';
export const SEARCH = 'SEARCH';