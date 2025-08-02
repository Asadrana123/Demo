import React, { useRef, useLayoutEffect, useState } from "react";

export default function Example1() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    function updateHeight() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    }
    updateHeight(); // Initial measurement
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div>
      <header ref={headerRef} style={{ background: "#90cdf4", padding: 16 }}>
        <h1>Dynamic Header</h1>
        {/* Add or remove content here to test */}
      </header>
      <main style={{ marginTop: headerHeight, background: "#f7fafc", padding: 16 }}>
        Content always sits just below header!
      </main>
    </div>
  );
}
