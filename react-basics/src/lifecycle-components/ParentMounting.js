import React, { Component } from "react";
import ChildMouting from "./ChildMounting";

class ParentMounting extends Component {
  constructor() {
    super();
    this.state = {
      name: "Keerthivasan",
    };
    console.log("Lifecycle Constructor Method A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle Static Get Derived State From Props A");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle Component Did Mount A");
  }

  render() {
    console.log("Lifecycle Render Method A");
    return (
      <React.Fragment>
        <div>Lifecycle A Methods</div>
        <ChildMouting />
      </React.Fragment>
    );
  }
}

export default ParentMounting;
