import React from "react";
import { useState } from "react";
export default function Login() {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState();
  const handleSubmit = () => {
    if (user.email === "john@gmail.com" && user.password === "1234") {
      setMessage("Welcome");
    } else {
      setMessage("Access Denied");
    }
  };
  return (
    <div>
      <h3>Login Form</h3>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
}