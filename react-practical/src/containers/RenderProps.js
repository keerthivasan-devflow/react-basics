import React from "react";
import RenderComponent from "../render-props-component/RenderComponent.js";
import RenderClick from "../render-props-component/RenderClick.js";
import RenderHover from "../render-props-component/RenderHover.js";

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
