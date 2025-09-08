import { useDataContext } from '../context/dataContext';
import { DISCOUNT,RESET,SORT,PRICE_RANGE } from '../constants/filtersConstant';
import { useCallback, useState } from 'react';
function useFilter() {
   const { dispatch } = useDataContext();
   const [openDropdown, setOpenSetDropdown] = useState('none');
   const handleFilterClick = useCallback((name) => {
      setOpenSetDropdown((prev) => {
         if (prev === name) return 'none';
         else return name;
      })
   }, [])
   const handleFilterSelect = useCallback((type, item) => {
      dispatch({ type, payload: { item } });
   }, [])
   const handlePriceRange = useCallback(
      (value) => {
         dispatch({ type: PRICE_RANGE, payload: { value } });
      },
      []
   );

   const handleDiscount = useCallback(
      (value) => {
         dispatch({ type: DISCOUNT, payload: { value } });
      },
      []
   );

   const handleReset = useCallback(() => {
      dispatch({ type: RESET });
   }, []);

   const handleSelectSortContent = useCallback(
      (value) => {
         dispatch({ type: SORT, payload: { value } });
      },
      []
   );
   return { handlePriceRange, handleDiscount, handleReset, handleSelectSortContent, openDropdown, handleFilterClick, handleFilterSelect }
}

export default useFilter