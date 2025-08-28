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
   return {handleSelectBrand,handleSelectCategory}
}

export default useFilter