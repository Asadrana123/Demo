import React, { useState, useMemo } from "react";

// Create a very large array to simulate an expensive operation
const bigNumbers = Array(1_000_000).fill().map((_, i) => i);

function ExpensiveComponent({ numbers }) {
  // Without useMemo, this calculation happens on every render!
  const sum = useMemo(() => {
    console.log("Computing sum...");
    return numbers.reduce((acc, n) => acc + n, 0);
  }, [numbers]);

  return <div>Sum of {numbers.length} numbers: {sum}</div>;
}

export default function Example() {
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Re-render Parent ({count})
      </button>
      <ExpensiveComponent numbers={bigNumbers} />
    </div>
  );
}
