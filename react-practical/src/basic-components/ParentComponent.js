import React, { Component } from "react";
import ChildComponent from "./ChildComponent.js";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello I am a right !",
    };
  }

  clickHandler = (childprops) => {
    alert(`Hey! I am Keerthivasan who is father of ${childprops}`);
  };

  render() {
    return (
      <div>
        <h3>This is my Parent Component</h3>
        <ChildComponent
          message={this.state.message}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default ParentComponent;
