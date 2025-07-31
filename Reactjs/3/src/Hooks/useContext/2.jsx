import React, { useState } from "react";
import { useContext, createContext } from "react";
import { useMemo } from "react";
export const UserContext = createContext({ language: 'en' });
UserContext.displayName = 'LanguageContext';
console.log(UserContext);
export default function Example2() {
  const [language, setLanguage] = useState('eng');
  const [theme, setTheme] = useState('light');
  const contextValue = {
    theme,
    setTheme,
    language,
    setLanguage,
  };
  return (
    <UserContext.Provider value1={{theme,setTheme,language,setLanguage}}>
      <Child1 />
      <Child2 />
    </UserContext.Provider>
  );
}

function Child1() {
  console.log('child1 re-render');
  const value = useContext(UserContext);
  console.log(value);
  return (
    <>
      <div>{theme}</div>
      <button onClick={() => setTheme('dark')} >change theme</button>
    </>
  );
}

function Child2() {
  console.log('child2 re-render');
  const { language, setLanguage, } = useContext(UserContext);
  return (
  <>
  <div>{language}</div>
  <button onClick={() => setLanguage('dark')} >change theme</button>
  </>
  )
}
