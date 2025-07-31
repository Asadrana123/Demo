import React, { createContext, useState, useContext, useMemo } from "react";

const CounterContext = createContext();

export default function Example2() {
  const [state, setState] = useState({ count: 0 });
  console.log(state);
  const contextValue = useMemo(() => ({ state, setState }), [state]);

  return (
    <CounterContext.Provider value={contextValue}>
      <Child />
    </CounterContext.Provider>
  );
}

const Child = React.memo(() => {
  console.log("Child rendered");
  const { state, setState } = useContext(CounterContext);
  const handleClick = () => {
    // MUTATION — we are mutating `state`, not creating a new object
    state.count += 1;
    setState(state); // re-setting same object
  };

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={handleClick}>Increment</button>
    </>
  );
});

/*
❓Your Tasks:
Answer the following:
Will <Child /> re-render on button click? Why or why not?
Is this the correct way to update state when using context? Explain what’s wrong with this approach.
What problems can arise from mutating context values?
*/