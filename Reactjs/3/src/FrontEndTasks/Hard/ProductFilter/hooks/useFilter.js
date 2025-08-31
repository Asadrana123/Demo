import React, { useEffect, useState } from 'react'
import { useDataContext } from '../context/dataContext';
function useFilter() {
   const { dispatch } = useDataContext();
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
   return { handleSelectBrand, handleSelectCategory, handlePriceRange, handleDiscount }
}

export default useFilter