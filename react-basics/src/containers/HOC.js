import React from "react";
import ClickCounter from "../hoc/ClickCounter.js";
import HoverCounter from "../hoc/HoverCounter.js";

const HocApp = () => {
  return (
    <>
      <ClickCounter clicked="Button clicked" />
      <HoverCounter hovered="Button hovered" />
    </>
  );
};

export default HocApp;
