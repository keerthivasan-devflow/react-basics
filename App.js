import React from "react";
import ReactDOM from "react-dom/client";

const COURSEID = 174640;

const Title = () => <h1>React JS Introdution</h1>;

const Header = () => {
  return (
    <header className="header-section">
      <Title />
      <Title></Title>
      {Title()}
      <p>React JS is a open source library for building user interface</p>
      <p>Course ID: {COURSEID}</p>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
