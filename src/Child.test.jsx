import Child from "./Child"
import { screen,render } from "@testing-library/react"
test("Child props",()=>{
    render(<Child name="John"/>)
    const txt = screen.getByText(/Hello John/i)
    expect(txt).toBeInTheDocument()
})