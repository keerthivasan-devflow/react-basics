import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../utils/constants";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Test Search Input Box", () => {
  render(<Body />);
  const searchInput = screen.getByRole("textbox");
  const searchBtn = screen.getByTestId("searchbtn");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn)
  expect(searchInput).toBeInTheDocument();
});
