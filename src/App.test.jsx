import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders login form",()=>{
    render(<App/>)
    const txt = screen.getByText(/login form/i)
    expect(txt).toBeInTheDocument()
})

test("successful login",async ()=>{
    render(<App/>)
    const email = screen.getByPlaceholderText("Email")
    const password = screen.getByPlaceholderText("Password")
    const btn = screen.getByText("Submit")
    await userEvent.type(email,"john@gmail.com")
    await userEvent.type(password,"1234")
    await userEvent.click(btn)
    const txt = screen.getByText("Welcome")
    expect(txt).toBeInTheDocument()
})

test("failed login",async ()=>{
    render(<App/>)
    const email = screen.getByPlaceholderText("Email")
    const password = screen.getByPlaceholderText("Password")
    const btn = screen.getByText("Submit")
    await userEvent.type(email,"amy@gmail.com")
    await userEvent.type(password,"1234")
    await userEvent.click(btn)
    const txt = screen.getByText("Access Denied")
    expect(txt).toBeInTheDocument()
})




// test("message update", async () => {
//   render(<App />);
//   const btn = screen.getByText("Update");
//   await userEvent.click(btn)
//   const txt = screen.getByText(/Broadridge/i);
//   expect(txt).toBeInTheDocument();
// });

// import React from "react";
// import { render,screen } from "@testing-library/react";
// import App from "./App";
// test("renders text",()=>{
//     render(<App/>)
//     const txt = screen.getByText(/hello world/i)
//     expect(txt).toBeInTheDocument()
// })
