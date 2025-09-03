import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../context/dataContext';
import useUrlOperations from './useUpdateUrl';
function useFilter() {
   const { dispatch, state } = useDataContext();
   const { convertFiltertoParams} = useUrlOperations();
   const isIntialLoad = useRef(true);
   useEffect(() => {
      if (isIntialLoad.current) {
         isIntialLoad.current = false;
         return;
      }
      convertFiltertoParams(state.filters);
   }, [state.filters])
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