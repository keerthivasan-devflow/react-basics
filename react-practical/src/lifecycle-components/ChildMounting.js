import React, { Component } from "react";

class ChildMouting extends Component {
  constructor() {
    super();
    this.state = {
      name: "Keerthivasan",
    };
    console.log("Lifecycle Constructor Method B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle Static Get Derived State From Props B");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle Component Did Mount B");
  }

  render() {
    console.log("Lifecycle Render Method B");
    return <div>Lifecycle B Methods</div>;
  }
}

export default ChildMouting;
