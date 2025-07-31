import React, { useState, useEffect, useRef } from "react";

export default function Example3() {
  const [count, setCount] = useState(0);
  const normalRef = useRef(count);
  const functionalRef = useRef(count);

  console.log("🐣 Render:", {
    count,
    normalRef: normalRef.current,
    functionalRef: functionalRef.current,
  });

  useEffect(() => {
    console.log("🚀 useEffect START:", {
      count,
      normalRef: normalRef.current,
      functionalRef: functionalRef.current,
    });

    normalRef.current = count;

    const id = setTimeout(() => {
      console.log("⏲️ Timeout fires:", {
        count,
        normalRef: normalRef.current,
        functionalRef: functionalRef.current,
      });

      functionalRef.current += 1;
      setCount(prev => prev + 1);
    }, 100);

    return () => {
      console.log("💥 Cleanup:", {
        count,
        normalRef: normalRef.current,
        functionalRef: functionalRef.current,
      });
      clearTimeout(id);
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
}
