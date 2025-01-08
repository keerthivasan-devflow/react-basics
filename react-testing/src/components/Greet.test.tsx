import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Component Testcases: ", () => {
  test("Test Person Biodata Component", () => {
    render(<Greet />);
    let text = screen.getByText(/good/);
    expect(text).toBeInTheDocument();
  });

  test("Test whether the component has a name prop or not", () => {
    render(<Greet name="laksha" />);
    let nameInput = screen.getByText(/laksha/);
    expect(nameInput).toBeInTheDocument();
  });

  describe("Nested Greet Component: ", () => {
    test("check whether the component has age which is greated than or equal to 18", () => {
      render(<Greet email="lk@gmail.com" />);
      let ageInput = screen.getByText(/lk@gmail.com/);
      expect(ageInput).toBeInTheDocument();
    });
  });
});
