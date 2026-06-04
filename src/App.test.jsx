import React from "react";
import { render,screen } from "@testing-library/react";
import App from "./App";

test("renders text",()=>{
    render(<App/>)
    const txt = screen.getByText(/hello world/i)
    expect(txt).toBeInTheDocument()
})