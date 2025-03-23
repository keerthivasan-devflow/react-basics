import React from "react";
import Example from "./Example";
import ParentContext from "./ParentContext";
import ThemeSwitcher from "./ThemeSwitcher";

const HookContext = () => {
  return (
    <div>
      <Example />
      <ParentContext />
      <ThemeSwitcher />
    </div>
  );
};

export default HookContext;
