import React, { useState, useEffect } from "react";

function Example6() {
  const [user, setUser] = useState('');
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    setUser('');

    const fetchUserName = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUser(data.name);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();

    return () => controller.abort();
  }, [id]);

  const handleChangeUser = () => {
    setId(prev => (prev === 10 ? 1 : prev + 1));
  };

  return (
    <div>
      <button onClick={handleChangeUser}>Change User Name</button>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {!loading && !error && <div>User Name: {user}</div>}
    </div>
  );
}

export default Example6;
