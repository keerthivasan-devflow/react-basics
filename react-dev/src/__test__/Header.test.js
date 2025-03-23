import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

test("Header should load with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const link = screen.getByRole("link", { name: "Login" });
  expect(link).toBeInTheDocument();
});

test("Check Login or Logout functionality", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const link = screen.getByRole("link", { name: "Login" });
  fireEvent.click(link);
  const logoutButton = screen.getByRole("link", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
