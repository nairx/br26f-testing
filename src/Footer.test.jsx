import Footer from "./Footer";
import { screen, render } from "@testing-library/react";

test("test copyright message", () => {
  render(<Footer />);
  const txt = screen.getByText("Copyright 2026. All rights reserved.");
  expect(txt).toBeInTheDocument();
});
