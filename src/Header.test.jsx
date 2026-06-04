import Header from "./Header";
import { screen,render } from "@testing-library/react";

test("render Broadridge",()=>{
    render(<Header/>)
    const txt = screen.getByText("Broadridge")
    expect(txt).toBeInTheDocument()
})

test("render label",()=>{
    render(<Header/>)
    const lbl = screen.getByText(/Menu/i)
    expect(lbl).toBeInTheDocument()
})