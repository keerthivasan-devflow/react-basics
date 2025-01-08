import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Top Level Components Link
import MenuBar from "./menubar/MenuBar.js";
import HomeNavbar from "./menubar/HomeNavbar.js";
import HookNavbar from "./menubar/HookNavbar.js";
import PerformanceNavbar from "./menubar/PerformanceNavbar.js";
import Context from "./containers/Context.js";
import Redux from "./containers/Redux.js";
import RegisterForm from "./react-form-hook/RegsiterForm.js";
import Dashboard from "./routers/Dashboard.js";

import ErrorBoundary from "./basic-components/ErrorBoundary.js";
import HeroComponent from "./basic-components/HeroComponent.js";
import ParentComponent from "./basic-components/ParentComponent.js";

import HookState from "./hooks/HookState.js";
import HookEffect from "./hooks/HookEffect.js";
import HookMemo from "./hooks/HookMemo.js";
import HookCallback from "./hooks/hook-callback/HookCallback.js";

import ParentComp from "./pure-components/ParentComp.js";
import RenderProps from "./containers/RenderProps.js";
import HOC from "./containers/HOC.js";
import User from "./routers/User.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MenuBar />
    <Routes>
      <Route path="/" element={<HomeNavbar />}>
        <Route
          path="error-boundary"
          element={
            <ErrorBoundary>
              <HeroComponent hero={"Surya"} />
            </ErrorBoundary>
          }
        />
        <Route path="parent-component" element={<ParentComponent />} />
      </Route>
      <Route path="/home" element={<Navigate to={"/"} />} />

      <Route path="/hooks" element={<HookNavbar />}>
        <Route path="use-state" element={<HookState />} />
        <Route path="use-effect" element={<HookEffect />} />
        <Route path="use-memo" element={<HookMemo />} />
        <Route path="use-callback" element={<HookCallback />} />
      </Route>

      <Route path="/context-api" element={<Context />} />

      <Route path="/performance" element={<PerformanceNavbar />}>
        <Route path="pure-components" element={<ParentComp />} />
        <Route path="hoc" element={<HOC />} />
        <Route path="render-props" element={<RenderProps />} />
      </Route>

      <Route path="/redux" element={<Redux />} />

      <Route path="/react-hook-form" element={<RegisterForm />} />

      <Route path="/users" element={<Dashboard />}>
          <Route path=":userId" element={<User />} />
      </Route>

      <Route
        path="*"
        element={<h1 style={{ color: "red" }}>Error: 404 - Page Not Found</h1>}
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
