import React, { createContext, useState, useContext } from "react";

const LangContext = createContext();

export default function Example3() {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Parent />
    </LangContext.Provider>
  );
}

const Parent = React.memo(() => {
  console.log("👨‍👩‍👧‍👦 Parent re-rendered");
  return (
    <>
      <h2>Parent</h2>
      <Child />
    </>
  );
});

const Child = React.memo(() => {
  console.log("🧒 Child re-rendered");
  return (
    <>
      <h3>Child</h3>
      <Deep />
    </>
  );
});

const Deep = React.memo(() => {
  console.log("👶 Deep re-rendered");
  const { lang, setLang } = useContext(LangContext);
  return (
    <>
      <h4>Lang: {lang}</h4>
      <button onClick={() => setLang(lang+'r')}>Change Lang</button>
    </>
  );
});

/*
❓Your Tasks:
Which components re-render when you click the "Change Lang" button?
Why does that happen even though React.memo is used on all components?
Can React skip walking through Parent and Child to reach Deep?
What's the internal mechanism React uses to find all consumers on context change?
*/