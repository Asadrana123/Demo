import React, { useState, useTransition } from 'react';

export default function Example1() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    
    // High priority update: user typing
    setInput(value);

    // Low prn iority update: slow background filtering/rendering
    startTransition(() => {
      // Simulate a heavy operation (like filtering a big list)
      const filteredList = heavyFilter(value);
      setList(filteredList);
    });
  }

  return (
    <>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Loading filtered list...</p>}
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  );
}

function heavyFilter(value) {
  // Simulate a slow CPU-heavy task
  const bigList = new Array(10000).fill(null).map((_, i) => `Item ${i}`);
  return bigList.filter(item => item.includes(value));
}
