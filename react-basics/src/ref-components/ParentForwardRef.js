import React, { Component } from "react";
import ForwardRefComponent from "./ForwardRefComponent";

class ParentForwardRef extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      msg: "Welcome"
    }
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardRefComponent ref={this.inputRef} state={this.state.msg} />
        <button onClick={this.clickHandler}>Click to focus</button>
      </div>
    );
  }
}

export default ParentForwardRef;
