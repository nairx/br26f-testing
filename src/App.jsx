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
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
export default function App() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  )
}




