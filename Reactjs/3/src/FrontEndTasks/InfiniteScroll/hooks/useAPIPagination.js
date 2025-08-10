import { useState, useEffect, useRef } from 'react';
import { useScrollDetection } from './useScrollDetection'; // your existing hook
import { useFetch } from './useFetch';

export const useApiPagination = ({ limit }) => {
  const { isNearBottom, targetDiv } = useScrollDetection();
  const { fetchData, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const lastCallTime = useRef(null);

  const loadMore = async () => {
    if (lastCallTime.current && Date.now() - lastCallTime.current < 1000) return;
    lastCallTime.current = Date.now();

    const pageNumber = Math.floor(items.length / limit) + 1;

    const data = await fetchData('', { _limit: limit, _page: pageNumber });
    if (data) {
      if (data.length === 0) setHasMore(false);
      else setItems((prev) => [...prev, ...data]);
    }
  };

  useEffect(() => {
    if (isNearBottom && !loading && hasMore) {
      loadMore();
    }
  }, [isNearBottom, loading, hasMore]);

  useEffect(() => {
    loadMore();
  }, []);

  return { items, loading, error, hasMore, targetDiv };
};
