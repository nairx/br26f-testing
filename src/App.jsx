// npm create vite@latest .
// npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
// npm install -D @testing-library/user-event

// vitest → Test runner (like Jest but faster)
// @testing-library/react → Test React components
// @testing-library/jest-dom → Extra matchers (toBeInTheDocument)
// jsdom → Simulates browser

// setupTests.js inside src folder
// import '@testing-library/jest-dom’;

import React from "react";
import { useState } from "react";
export default function App() {
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

// import React, { useState } from 'react'
// export default function App() {
//   const [message,setMessage] = useState("")
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>{message}</p>
//       <p><button onClick={()=>setMessage("Broadridge")}>Update</button></p>
//     </div>
//   )
// }

// import React from 'react'
// export default function App() {
//   return (
//     <div>HELLO world</div>
//   )
// }
