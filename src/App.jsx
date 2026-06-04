
// npm create vite@latest .
// npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
// npm install -D @testing-library/user-event

// vitest → Test runner (like Jest but faster) 
// @testing-library/react → Test React components 
// @testing-library/jest-dom → Extra matchers (toBeInTheDocument) 
// jsdom → Simulates browser

// setupTests.js inside src folder
// import '@testing-library/jest-dom’;

import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}
