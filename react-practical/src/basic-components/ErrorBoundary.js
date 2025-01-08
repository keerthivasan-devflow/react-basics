import React, { Component } from "react";
import "../App.css"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("error: ", error)
    console.log("info: ", info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-block">
          <h1>This is actually a fallback UI</h1>
          <h3>Something went wrong! please check hero component.</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
