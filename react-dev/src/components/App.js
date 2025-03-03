import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";

import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Container from "./Container";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import Login from "./Login";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";
import Topbar from "./Topbar";

const Grocery = lazy(() => import("../components/Grocery"));

const App = () => {
  const [username, setUsername] = useState();

  const data = {
    name: "Keerthivasan Mani",
  };

  useEffect(() => {
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username }}>
        <Header />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/container",
        element: <Container />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
  {
    path: "/home",
    element: <Navigate to={"/"} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
