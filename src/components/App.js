import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Container from "./Container";
import About from "./About";
import Error from "./Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
