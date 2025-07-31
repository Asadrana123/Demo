import React, { useState, useRef, useEffect } from "react";

export default function Example2() {
  const [count, setCount] = useState(0);
  const ref = useRef(count);
  console.log("🐣 Render:", { count: count, ref: ref.current });

  useEffect(() => {
    console.log("🚀 useEffect START:", { count: count, ref: ref.current });

    ref.current = count;

    const id = setTimeout(() => {
      console.log("⏲️ Timeout fires:", { count: count, ref: ref.current });
    }, 10000);

    return () => {
      console.log("💥 Cleanup:", { count: count, ref: ref.current });
      clearTimeout(id);
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
}
