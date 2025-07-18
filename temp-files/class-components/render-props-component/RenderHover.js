import React, { Component } from "react";

class RenderHover extends Component {
  render() {
    return (
      <div>
        <h1>Render Props - Hover Counter Functionality</h1>
        <p>Counter: {this.props.count}</p>
        <button onMouseOver={this.props.counterfunctionality}>
          Render Hover Counter
        </button>
      </div>
    );
  }
}

export default RenderHover;
