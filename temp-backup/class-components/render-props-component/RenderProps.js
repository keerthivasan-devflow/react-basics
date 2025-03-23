import React from "react";
import RenderComponent from "./RenderComponent.js";
import RenderClick from "./RenderClick.js";
import RenderHover from "./RenderHover.js";

const RenderApp = () => {
  return (
    <>
      <RenderComponent
        render={(countValue, countMethod) => (
          <RenderClick count={countValue} counterfunctionality={countMethod} />
        )}
      />

      <RenderComponent
        render={(countValue, countMethod) => (
          <RenderHover count={countValue} counterfunctionality={countMethod} />
        )}
      />
    </>
  );
};

export default RenderApp
