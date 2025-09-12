import { DISCOUNT, RESET, SORT, PRICE_RANGE } from '../constants/filtersConstant';
import { useCallback, useState } from 'react';
import { useFilterProvider, useDispatchProvider } from '../context/dataContext';
import useWindowSize from './useWindowSize';
function useFilter() {
   const dispatch = useDispatchProvider();
   const { filters } = useFilterProvider();
   const width = useWindowSize();
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
   return { handlePriceRange, handleDiscount, handleReset, handleSelectSortContent, openDropdown, handleFilterClick, handleFilterSelect, width, filters }
}

export default useFilter