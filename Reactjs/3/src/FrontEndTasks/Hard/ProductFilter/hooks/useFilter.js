import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../context/dataContext';
import useUrlOperations from './useUpdateUrl';
function useFilter() {
   const { dispatch, state } = useDataContext();
   const { convertFiltertoParams, convertParamstoFilter } = useUrlOperations();
   useEffect(() => {
      convertFiltertoParams(state.filters);
      console.log(state.filters)
   }, [state.filters])
   useEffect(() => {
      let newFilters = convertParamstoFilter(state.filters);
      dispatch({ type: 'FILTER', payload: { filters: newFilters } })
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