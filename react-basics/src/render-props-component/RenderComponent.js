import React, { Component } from "react";

class RenderComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  IncrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        {this.props.render(this.state.counter, this.IncrementCounter)}
        {/* {this.props.children(this.state.counter, this.IncrementCounter)} */}
      </div>
    );
  }
}

export default RenderComponent;
