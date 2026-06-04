import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
test("message update", async () => {
  render(<App />);
  const btn = screen.getByText("Update");
  await userEvent.click(btn)
  const txt = screen.getByText(/Broadridge/i);
  expect(txt).toBeInTheDocument();
});

// import React from "react";
// import { render,screen } from "@testing-library/react";
// import App from "./App";
// test("renders text",()=>{
//     render(<App/>)
//     const txt = screen.getByText(/hello world/i)
//     expect(txt).toBeInTheDocument()
// })
