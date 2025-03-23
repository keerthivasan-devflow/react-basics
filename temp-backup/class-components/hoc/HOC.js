import React from "react";
import ClickCounter from "./ClickCounter.js";
import HoverCounter from "./HoverCounter.js";

const HocApp = () => {
  return (
    <>
      <ClickCounter clicked="Button clicked" />
      <HoverCounter hovered="Button hovered" />
    </>
  );
};

export default HocApp;
