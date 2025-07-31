import React from "react";

function Example() {
  // Block the thread for 5 seconds
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // busy-wait loop for 5000 ms (5 seconds)
  }

  console.log("Finished blocking");

  return <div>UI rendered after 5 seconds block</div>;
}

export default Example;
