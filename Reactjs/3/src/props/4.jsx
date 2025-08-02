import React, { useState } from "react";

const Child = React.memo(function Child({ user }) {
  console.log("Child rendered");
  return <div>{user.details.name}</div>;
});

export default function Example4() {
  const [user, setUser] = useState({
    details: {
      name: "Asad"
    }
  });

  const handleClick = () => {
    user.details.name = "Changed";
    setUser(user);
  };

  return (
    <div>
      <button onClick={handleClick}>Update</button>
      <Child user={user} />
    </div>
  );
}
// ✅ Task:
// How many times will Child render?
// What will be the output before and after the button click?
// Explain why React.memo fails here and how React internally decides this.
// How can you fix it properly without breaking React's expected behavior?

