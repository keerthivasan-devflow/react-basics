import React, { Component } from "react";

class StaticGetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 2,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props: ", props);
    console.log("state: ", state);
    if (props.value !== state.count) {
      return {
        count: state.count + 1,
      };
    }
    return null;
  }

  render() {
    return (
      <>
        <h3>Counter: {this.state.count}</h3>
      </>
    );
  }
}

export default StaticGetDerivedStateFromProps;
