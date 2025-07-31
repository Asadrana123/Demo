import React, { useState, useEffect } from "react";

export default function Example1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`🔵 Effect ran, count is ${count}`);

    const id = setInterval(() => {
      console.log(`⏰ Interval tick: count is ${count}`);
      setCount(count + 1);
    }, 2000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
