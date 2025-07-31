import React, { useEffect, useRef, useState } from "react";

export default function Example4() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  console.log("🐣 Render:", count);

  useEffect(() => {
    console.log("🚀 useEffect:", count);

    const handleClick = () => {
      console.log("🔔 Click handler:", count);
      setCount(count + 1);
    };

    const btn = buttonRef.current;
    btn.addEventListener("click", handleClick);

    return () => {
      console.log("💥 Cleanup:", count);
      btn.removeEventListener("click", handleClick);
    };
  }, [count]);

  return (
    <button ref={buttonRef}>Click me</button>
  );
}
