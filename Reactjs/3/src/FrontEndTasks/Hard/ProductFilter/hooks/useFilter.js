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
   const handlePriceRange = (value, type) => {
      dispatch({ type: 'PRICE_RANGE', payload: { value, type } })
   }
   return { handleSelectBrand, handleSelectCategory, handlePriceRange }
}

export default useFilter