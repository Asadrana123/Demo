function memoize(fn) {
    const cache = {}; // closure variable
  
    return function (key) {
      if (cache[key]) {
        console.log("Returning from cache:", key);
        return cache[key];
      } else {
        console.log("Computing result for:", key);
        const result = fn(key);
        cache[key] = result;
        return result;
      }
    };
  }
  
  // An expensive function (simulate with heavy computation or network)
  function fetchUserData(userId) {
    // Simulate expensive operation
    return `UserData for ID ${userId}`;
  }
  
  const memoizedFetch = memoize(fetchUserData);
  
  console.log(memoizedFetch("101")); // Computed
  console.log(memoizedFetch("102")); // Computed
  console.log(memoizedFetch("101")); // From cache
  console.log(memoizedFetch("102")); // From cache
  