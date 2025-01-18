import React from "react";
import { ChannelProvider } from "../classy/context-api/ContextComponent.js";
import ContextA from "../classy/context-api/ContextA.js";

const ContextApp = () => {
  return (
    <>
      <ChannelProvider value="kvasan_techie">
        <ContextA />
      </ChannelProvider>
    </>
  );
};

export default ContextApp;
