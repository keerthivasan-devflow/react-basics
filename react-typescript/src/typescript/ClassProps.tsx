import React, { Component } from "react";

type PropsClass = {
  message: string;
};

type StateProps = {
  count: number;
};

class ClassProps extends Component<PropsClass, StateProps> {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h3>Class Props Component...</h3>
        <p>Message - {this.props.message}</p>
        <p>Count : {this.state.count}</p>
      </div>
    );
  }
}

export default ClassProps;
