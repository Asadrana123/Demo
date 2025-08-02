import React, { useState } from "react";

function Child({ user }) {
  console.log('re-render');
  user.name = "Changed";
  return <div>{user.name}</div>;
}

export default function Parent() {
  const [user, setUser] = useState({ name: "Asad" });

  const handleClick = () => {
    setUser({ ...user });
  };

  return (
    <div>
      <button onClick={handleClick}>Update</button>
      <Child user={user} />
    </div>
  );
}
