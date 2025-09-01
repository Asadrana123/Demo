import React, { useEffect, useState } from 'react'
import { useDataContext } from '../context/dataContext';
function useFilter() {
   const { dispatch, state: { filters } } = useDataContext();
   const params = new URLSearchParams(window.location.search);
   useEffect(() => {
      let newFilters = { ...filters };
      const brands = params.getAll("Brand");
      if (brands.length > 0) {
         newFilters = {
            ...newFilters,
            brands
         };
      }

      const categories = params.getAll("Category");
      if (categories.length > 0) {
         newFilters = {
            ...newFilters,
            categories
         };
      }

      console.log(newFilters);
      dispatch({ type: "FILTER", payload: { filters: newFilters } });
   }, []);

   const handleSelectBrand = (brand) => {
      dispatch({ type: 'BRAND', payload: { brand } })
   }
   const handleSelectCategory = (category) => {
      dispatch({ type: 'CATEGORY', payload: { category } })
   }
   const handlePriceRange = (value) => {
      dispatch({ type: 'PRICE_RANGE', payload: { value } })
   }
   const handleDiscount = (value) => {
      dispatch({ type: 'DISCOUNT', payload: { value } })
   }
   const handleReset = () => {
      dispatch({ type: 'RESET' })
   }
   const handleSelectSortContent = (value) => {
      dispatch({ type: 'SORT', payload: { value } })
   }
   return { handleSelectBrand, handleSelectCategory, handlePriceRange, handleDiscount, handleReset, handleSelectSortContent }
}

export default useFilter