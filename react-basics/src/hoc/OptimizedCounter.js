import React, {Component} from "react";

const OptimizedCounter = (OriginalComponent, InitialValue) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        counter: 0,
      };
    }

    IncrementCounter = () => {
      this.setState({
        counter: this.state.counter + InitialValue,
      });
    };

    render() {
      return (
        <React.Fragment>
          <OriginalComponent
            count={this.state.counter}
            incrementCounter={this.IncrementCounter}
            {...this.props}
          />
        </React.Fragment>
      );
    }
  }
  return NewComponent;
};

export default OptimizedCounter;
