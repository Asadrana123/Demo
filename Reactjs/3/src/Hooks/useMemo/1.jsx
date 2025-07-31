import React, { useState, useMemo } from "react";

// Simulate a users list
const initialUsers = [
  { id: 1, name: "Alice", active: false },
  { id: 2, name: "Bob", active: true },
  { id: 3, name: "Charlie", active: false },
];

export default function Example1() {
  const [users, setUsers] = useState(initialUsers);

  // BAD: Mutates the array in place (same reference)
  function toggleUserActive(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
      user.active = !user.active;
      setUsers(users); // Note: Passes the SAME array reference!
    }
  }

  const activeUsers = useMemo(
    () => users.filter(u => u.active),
    [users]
  );

  return (
    <div>
      <h2>Active Users</h2>
      <ul>
        {activeUsers.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
      <h2>All Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.active ? "active" : "inactive"})
            <button onClick={() => toggleUserActive(u.id)}>
              Toggle Active
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
QWhat will happen to activeUsers if an inactive user is toggled to active via 
mutation (but the parent state array reference stays the same)?
*/
