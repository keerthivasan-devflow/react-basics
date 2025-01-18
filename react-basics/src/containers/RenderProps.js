import React from "react";
import RenderComponent from "../classy/render-props-component/RenderComponent.js";
import RenderClick from "../classy/render-props-component/RenderClick.js";
import RenderHover from "../classy/render-props-component/RenderHover.js";

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
