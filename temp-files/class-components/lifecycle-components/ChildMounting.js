import React, { Component } from "react";

class ChildMouting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Keerthivasan",
    };
    console.log(this.props.name + " Lifecycle Constructor Method B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(this.props.name + " Lifecycle Static Get Derived State From Props B");
    return null;
  }

  componentDidMount() {
    console.log(this.props.name + " Lifecycle Component Did Mount B");
  }

  render() {
    console.log(this.props.name + " Lifecycle Render Method B");
    return <div>Child Mounting Lifecycle Methods</div>;
  }
}

export default ChildMouting;
