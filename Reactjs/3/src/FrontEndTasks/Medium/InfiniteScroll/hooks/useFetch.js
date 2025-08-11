import { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (baseURL) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const controller = useRef(null);
  
  const fetchData = useCallback(async (url = '', params = {}) => {
    try {
      if (controller.current) {
        controller.current.abort();
      }

      setError('');
      setLoading(true);
      controller.current = new AbortController();

      const response = await axios.get(url, {
        baseURL,
        params,
        signal: controller.current.signal,
      });
      return response.data;

    } catch (err) {
      if (axios.isCancel(err)) return null;

      if (err.response) setError(`Error: ${err.response.status} - ${err.response.statusText}`);
      else if (err.request) setError('Network error: Please check your connection.');
      else setError(err.message || 'An unexpected error occurred.');

      return null;
    } finally {
      setLoading(false);
    }
  }, [baseURL]);

  useEffect(() => {
    return () => {
      if (controller.current) {
        controller.current.abort();
      }
    };
  }, []);

  return { fetchData, loading, error };
};
