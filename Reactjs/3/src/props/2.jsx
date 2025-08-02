import React, { useState } from 'react';

const Child=React.memo(function Child({ data }) {
  console.log("Child rendered");
  return <div>{data.name}</div>;
})

export default function Example2() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Asad" });

  const update = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={update}>Increment</button>
      <Child data={user} />
    </div>

  );
}
