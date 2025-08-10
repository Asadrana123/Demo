import { useState, useEffect, useRef } from 'react';

export const useScrollDetection = () => {
  const [isNearBottom, setIsNearBottom] = useState(false);
  const targetDiv = useRef(null);

  useEffect(() => {
    if (!targetDiv.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === targetDiv.current) {
          setIsNearBottom(entry.isIntersecting);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    observer.observe(targetDiv.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isNearBottom, targetDiv };
};
