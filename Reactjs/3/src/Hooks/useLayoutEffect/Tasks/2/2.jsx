import React, { useRef, useLayoutEffect, useState } from "react";

export default function Example2() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      console.log(entries[0].contentRect.height);
      if (entries.length > 0) {
        setHeaderHeight(prev=>prev===entries[0].contentRect.height?prev:entries[0].contentRect.height)
      }
    })
    if (headerRef.current) observer.observe(headerRef.current);
    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <div>
      <header ref={headerRef} style={{ background: "#90cdf4", padding: 16 }}>
        <h1>Dynamic Headerrrr</h1>
        {/* Add/remove/change content here to test dynamic header */}
      </header>
      <main style={{ marginTop: headerHeight, background: "#f7fafc", padding: 16 }}>
        Content always sits just below header!
      </main>
    </div>
  );
}
