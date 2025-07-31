import React, { useState, useEffect, useRef } from "react";

export default function Example5() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  console.log("🐣 Render:", count);

  // ❌ This handler is defined outside useEffect:
  function handleClick() {
    console.log("🔔 Click handler, count:", count);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("🚀 useEffect:", count);

    const btn = buttonRef.current;
    btn.addEventListener("click", handleClick);

    return () => {
      console.log("💥 Cleanup:", count);
      btn.removeEventListener("click", handleClick);
    };
  }, [count]);

  return <button ref={buttonRef}>Click me</button>;
}
