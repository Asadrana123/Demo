import React, { useEffect, useState } from 'react'
import { useDataContext } from '../context/dataContext';
import useUpdateUrl from './useUpdateUrl';
function useFilter() {
   const { dispatch, state: { filters } } = useDataContext();
   const { params } = useUpdateUrl();
   useEffect(() => {
      console.log(params);
   }, [])
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