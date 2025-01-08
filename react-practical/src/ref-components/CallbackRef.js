import React, { Component } from "react";

class CallbackRef extends Component {
  constructor() {
    super();
    this.callbackRef = null;
    this.setCallbackRef = (element) => {
      this.callbackRef = element;
    };
  }

  componentDidMount() {
    this.callbackRef.focus();
  }

  render() {
    return (
      <div>
        <form>
          <label>Enter the password : </label>
          <input type={"password"} ref={this.setCallbackRef} />
        </form>
      </div>
    );
  }
}

export default CallbackRef;
