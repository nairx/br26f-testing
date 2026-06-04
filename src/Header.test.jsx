import Header from "./Header";
import { screen,render } from "@testing-library/react";

test("render Broadridge",()=>{
    render(<Header/>)
    const txt = screen.getByText("Broadridge")
    expect(txt).toBeInTheDocument()
})