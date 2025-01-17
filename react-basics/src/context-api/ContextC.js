import React, {useContext } from "react";
import {
  ChannelConsumer,
  ChannelContext,
  UserConsumer,
  UserContext,
} from "./ContextComponent.js";

let ContextC = () => {
  let user = useContext(UserContext);
  let channel = useContext(ChannelContext);
  return (
    <div>
      <h1>Context C Component</h1>
      <UserConsumer>
        {(username) => {
          return (
            <ChannelConsumer>
              {(channelname) => {
                return (
                  <div>
                    <h3>
                      Username : {username} username printed once again in context C to make sure.
                    </h3>
                    <h3>Channel name : {channelname}</h3>
                  </div>
                );
              }}
            </ChannelConsumer>
          );
        }}
      </UserConsumer>
    </div>
  );
};

export default ContextC;
