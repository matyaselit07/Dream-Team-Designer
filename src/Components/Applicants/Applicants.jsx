import { useEffect, useState } from "react";

import "./Applicants.css";

export default function Applicants() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error("API hiba");
      }

      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  function reloadApi() {
    setLoading(true);
    getUsers();
  }

  if (loading) return <p className="text-loading">Betöltés...</p>;
  if (error) return <p className="text-error">Hiba: {error}</p>;

  return (
    <main>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <div>
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />

              <h2>
                {user.name.title} {user.name.first} {user.name.last}
              </h2>
            </div>
            <div>
              <button>Invite Candidate</button>
              <button onClick={reloadApi}>Reject Candidate</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
