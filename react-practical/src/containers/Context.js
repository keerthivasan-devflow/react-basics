import React from "react";
import { ChannelProvider } from "../context-api/ContextComponent.js";
import ContextA from "../context-api/ContextA.js";

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
