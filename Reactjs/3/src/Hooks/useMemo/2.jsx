import React, { useState, useMemo } from "react";

function ExpensiveSum({ numbers }) {
  // useMemo caches the value until `numbers` changes!
  const total = useMemo(
    () => numbers.reduce((sum, n) => sum + n, 0),
    [numbers]
  );
  return <div>Total: {total}</div>;
}

export default function Example() {
  const [count, setCount] = useState(0);
  const bigArray = Array(1e6).fill(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <ExpensiveSum numbers={bigArray} />
    </div>
  );
}
