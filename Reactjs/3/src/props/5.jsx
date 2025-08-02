import React, { useState } from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("Clicked");
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
// ✅ Task:
// Will Child re-render on every Increment click? Why?
// Explain how React compares function props internally.
// How can you prevent Child from re-rendering unnecessarily here?
// What are the trade-offs of your fix?

