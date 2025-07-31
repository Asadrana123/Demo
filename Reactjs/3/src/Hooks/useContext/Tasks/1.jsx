import React, { useState, useContext, createContext, useMemo } from "react";

const SharedContext = createContext();

export default function Example1() {
  const [state, setState] = useState({ count: 0, theme: "light" });

  const contextValue = useMemo(() => ({ state, setState }), [state]);

  return (
    <SharedContext.Provider value={contextValue}>
      <Counter />
      <ThemeToggler />
    </SharedContext.Provider>
  );
}

const Counter = React.memo(function Counter() {
  console.log("🎯 Counter rendered");
  const { state, setState } = useContext(SharedContext);
  return (
    <button onClick={() => setState({ ...state, count: state.count + 1 })}>
      Count: {state.count}
    </button>
  );
});

const ThemeToggler = React.memo(function ThemeToggler() {
  console.log("🎯 ThemeToggler rendered");
  const { state, setState } = useContext(SharedContext);
  return (
    <button onClick={() => setState({ ...state, theme: state.theme === "light" ? "dark" : "light" })}>
      Theme: {state.theme}
    </button>
  );
});

/*🧠 Your Task:
When you click "Count" button — which components will re-render? Why?
When you click "Theme" button — which components will re-render? Why?
Now assume you split the context into CountContext and ThemeContext — what changes? What happens internally?
*/
