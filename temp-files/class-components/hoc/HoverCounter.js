import React, { Component } from "react";
import OptimizedCounter from "./OptimizedCounter.js";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2>Hover Counter Functionality - Higher Order Component</h2>
        <p>Counter : {this.props.count}</p>
        <p><i>Note: {" "}{this.props.hovered}</i></p>
        <button onMouseOver={this.props.incrementCounter}>
          Hover Counter
        </button>
      </div>
    );
  }
}

export default OptimizedCounter(HoverCounter, 10);
