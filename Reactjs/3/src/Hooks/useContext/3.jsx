import React, { useState } from "react";
import { useContext, createContext } from "react";
import { useMemo } from "react";
export const UserContext = createContext({ name: 'Asad' });
export const ThemeContext = createContext('light');
export const tempContext = createContext('temp');
export default function Example3() {
    const [user, setUser] = useState({ name: 'Asad' });
    const [theme, setTheme] = useState('light');
    const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
    const userValue = useMemo(() => ({ user, setUser }), [user]);
    return (
        <ThemeContext.Provider value={themeValue}>
            <UserContext.Provider value={userValue}>
                <Child1 />
                <Child2 />
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

const Child1 = React.memo(function Child1() {
    console.log('child1 re-render');
    const { theme, setTheme } = useContext(ThemeContext);
    const value=useContext(tempContext);
    console.log(value);
    return (
        <>
            <div>{theme}</div>
            <button onClick={() => setTheme('dark')} >change theme</button>
        </>
    );
})

const Child2 = React.memo(function Child2() {
    console.log('child2 re-render');
    const { user, setUser, } = useContext(UserContext);
    return (
        <>
            <div>{user.name}</div>
            <button onClick={() => setUser({ name: 'Rana' })} >change theme</button>
        </>
    )
})
