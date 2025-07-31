import React, { useState, useEffect } from "react";

export default function Example6() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  console.log("🐣 Render:", { a, b });

  if (a < 1 && b < 1) {
    setA(1);
    setB(1);
  }

  useEffect(() => {
    console.log("🚀 Effect A:", a);
  }, [a]);

  useEffect(() => {
    console.log("🎈 Effect B:", b);
  }, [b]);

  return (
    <div>
      {a} - {b}
    </div>
  );
}
