import React, { Component } from "react";

class RenderClick extends Component {
  render() {
    return (
      <div>
        <h1>Render Props - Click Counter Functionality</h1>
        <p>Counter: {this.props.count}</p>
        <button onClick={this.props.counterfunctionality}>
          Render Click Counter
        </button>
      </div>
    );
  }
}

export default RenderClick;
