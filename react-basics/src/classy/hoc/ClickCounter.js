import React, { Component } from "react";
import OptimizedCounter from "./OptimizedCounter.js";
class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h2>Click Counter Functionality - Higher Order Component</h2>
        <p>Counter : {this.props.count}</p>
        <p><i>Note: {this.props.clicked}</i></p>
        <button onClick={this.props.incrementCounter}>Click Counter</button>
      </div>
    );
  }
}

export default OptimizedCounter(ClickCounter, 5);
