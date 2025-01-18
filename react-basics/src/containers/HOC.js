import React from "react";
import ClickCounter from "../classy/hoc/ClickCounter.js";
import HoverCounter from "../classy/hoc/HoverCounter.js";

const HocApp = () => {
  return (
    <>
      <ClickCounter clicked="Button clicked" />
      <HoverCounter hovered="Button hovered" />
    </>
  );
};

export default HocApp;
