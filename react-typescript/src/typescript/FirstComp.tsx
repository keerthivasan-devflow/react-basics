import React, { Component } from "react";
import { SecondCompProps } from "./SecondComp";

type FirstComponentProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<SecondCompProps>;
};

function FirstComp({ isLoggedIn, Component }: FirstComponentProps) {
  return (
    <div>{isLoggedIn ? <Component name="Keerthivasan" /> : <div>You're not logged in yet</div>}</div>
  );
}

export default FirstComp;
