import React, { Component } from "react";

class SimpleReactRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <form>
          <input type="text" ref={this.inputRef} />
        </form>
      </>
    );
  }
}

export default SimpleReactRef;
