import React, { useState, useMemo } from "react";

const defaultSettings = {
  filters: { min: 0, max: 100 },
  sort: { key: "score", direction: "desc" }
};

function Widget({ data, settings }) {
  const processedData = useMemo(() => {
    // Simulate an expensive calculation
    return data
      .filter(d => d.value >= settings.filters.min && d.value <= settings.filters.max)
      .sort((a, b) =>
        settings.sort.direction === "asc"
          ? a[settings.sort.key] - b[settings.sort.key]
          : b[settings.sort.key] - a[settings.sort.key]
      );
  }, [data, settings]);

  return (
    <div>
      {processedData.map(d => (
        <div key={d.id}>{d.label}: {d.value}</div>
      ))}
    </div>
  );
}

export default function Example2() {
  const [data] = useState([
    { id: 1, label: "A", value: 80, score: 10 },
    { id: 2, label: "B", value: 35, score: 50 },
    { id: 3, label: "C", value: 90, score: 30 }
  ]);
  const [settings, setSettings] = useState(defaultSettings);

  // NOTE: Imagine the following line is common in real code:
  // Passing a new object every render, even if the values do not change.
  const userSettings = {
    filters: { ...settings.filters },
    sort: { ...settings.sort }
  };

  return (
    <Widget data={data} settings={userSettings} />
  );
}
