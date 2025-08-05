import React, { useState, useMemo } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
 //useMemo as useCallBack
  // useMemo version: memoize the function itself
  const increment = useMemo(() => {
    return () => setCount((c) => c + 1);
  }, []);

  return (
    <button onClick={increment}>Increment: {count}</button>
  );
}
