import React, { useState } from "react";

const XLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!username || !password) {
      setMessage("Both fields are required.");
    } else if (username === "user" && password === "password") {
      setMessage("Welcome, user");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p style={{ marginTop: "10px" }}>{message}</p>
      )}
    </div>
  );
};

export default XLogin;
