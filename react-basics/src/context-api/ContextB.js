import React, { Component } from "react";
import ContextC from "./ContextC.js";
import { UserContext } from "./ContextComponent.js";

class ContextB extends Component {
  render() {
    return (
      <div>
        <h1>Context B Component - {this.context}</h1>
        <ContextC />
      </div>
    );
  }
}

ContextB.contextType = UserContext;

export default ContextB;
