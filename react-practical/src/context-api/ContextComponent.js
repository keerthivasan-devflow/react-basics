import React from "react";

let UserContext = React.createContext("Lakshashree(default)");
let UserProvider = UserContext.Provider;
let UserConsumer = UserContext.Consumer;

let ChannelContext = React.createContext();
let ChannelProvider = ChannelContext.Provider;
let ChannelConsumer = ChannelContext.Consumer;

export {
  UserContext,
  UserProvider,
  UserConsumer,
  ChannelContext,
  ChannelProvider,
  ChannelConsumer,
};
