// import React, { Component } from "react";
import React, { PureComponent } from 'react'
import RegularComp from "./RegularComp.js";
import PureComp from "./PureComp.js";
import MemoComp from "./MemoComp.js";

// class ParentComp extends Component {
class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        name: "keerthivasan"
    }
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        name: "keerthivasan",
      });
    }, 3000);
  }
  

  render() {
    console.log("Parent Component");
    return (
      <>
        <h2>Parent Component</h2>
        <RegularComp username={this.state.name} />
        {/* <PureComp username={this.state.name}/> */}
        <MemoComp username={this.state.name} />
      </>
    );
  }
}

export default ParentComp;
