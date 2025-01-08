import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component")
    return (
      <>
        <h2>Pure Component - {this.props.username}</h2>
      </>
    );
  }
}

export default PureComp;
