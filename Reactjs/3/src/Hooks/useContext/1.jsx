import React from "react";
import { useContext,createContext } from "react";
const UserContext=createContext('default value');
export default function Example1() {
  const user={name:'Asad'}
  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
}
