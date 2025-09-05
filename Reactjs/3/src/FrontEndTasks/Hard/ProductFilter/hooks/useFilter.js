import { useDataContext } from '../context/dataContext';
import { useCallback } from 'react';
function useFilter() {
   const { dispatch } = useDataContext();
   const handleSelectBrand = useCallback(
      (brand) => {
         dispatch({ type: 'BRAND', payload: { brand } });
      },
      []
   );

   const handleSelectCategory = useCallback(
      (category) => {
         dispatch({ type: 'CATEGORY', payload: { category } });
      },
      []
   );

   const handlePriceRange = useCallback(
      (value) => {
         dispatch({ type: 'PRICE_RANGE', payload: { value } });
      },
      []
   );

   const handleDiscount = useCallback(
      (value) => {
         dispatch({ type: 'DISCOUNT', payload: { value } });
      },
      []
   );

   const handleReset = useCallback(() => {
      dispatch({ type: 'RESET' });
   }, []);

   const handleSelectSortContent = useCallback(
      (value) => {
         dispatch({ type: 'SORT', payload: { value } });
      },
      []
   );
   return { handleSelectBrand, handleSelectCategory, handlePriceRange, handleDiscount, handleReset, handleSelectSortContent }
}

export default useFilter