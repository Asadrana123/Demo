import React, { useState, useEffect } from "react";

export default function Example5() {
  const [count, setCount] = useState(0);

  console.log("🐣 Render:", count);

  useEffect(() => {
    console.log("🚀 Effect:", count);

    const id1 = setTimeout(() => {
      console.log("⏲️ Timeout A fires:", count);
      setCount(count + 1);
    }, 100);

    const id2 = setTimeout(() => {
      console.log("⏲️ Timeout B fires:", count);
      setCount(prev => prev + 1);
    }, 200);

    return () => {
      console.log("💥 Cleanup:", count);
      clearTimeout(id1);
      clearTimeout(id2);
    };
  }, [count]);

  return <h1>{count}</h1>;
}
