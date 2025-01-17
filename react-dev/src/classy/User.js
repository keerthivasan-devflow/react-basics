import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Made componentDidMount() as an async function to make an API call
  componentDidMount = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const response = await data.json();

    this.setState({
      // update the state value here also
    });
    console.log(response);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Component updated whenever it requires, this will also trigger re-renders"
    );
  }

  componentWillUnmount(){
    console.log("Component will unmount")
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <>
        <h3>User Details</h3>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Count: {count}</p>
        <button type="button" onClick={this.clickHandler}>
          Click
        </button>
      </>
    );
  }
}

export default User;
