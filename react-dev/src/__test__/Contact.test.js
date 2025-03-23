import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page TestCases", () => {
  describe("Testing the text content", () => {
    it("Whether the contact component renders or not", () => {
      render(<Contact />);
      const text = screen.getByText("Contact Us");
      expect(text).toBeInTheDocument();
    });

    it("Check whether the submit is exit!", () => {
      render(<Contact />);
      const submit = screen.getByText(/submit/i);
      expect(submit).toBeInTheDocument();
    });
  });

  describe("Testing the HTML Elements", () => {
    it("Check whether the button is exist or not", () => {
      render(<Contact />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("Check three input boxes are there!", () => {
      render(<Contact />);
      const inputBoxes = screen.getAllByRole("textbox");
      expect(inputBoxes.length).toBe(3);
    });
  });
});
