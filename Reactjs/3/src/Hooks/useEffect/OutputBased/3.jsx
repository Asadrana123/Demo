import React, { useState, useEffect } from "react";

export default function Example3() {
  const [count, setCount] = useState(0);

  console.log("🐣 Render:", count);

  useEffect(() => {
    console.log("🚀 Effect 1:", count);
    return () => console.log("💥 Cleanup 1:", count);
  }, [count]);

  useEffect(() => {
    console.log("🧹 Effect 2:", count);
    setCount(1);
  }, []);

  return <h1>{count}</h1>;
}
