import React, { Component } from "react";
import axios from "axios";

class HTTPRequestPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      title: "",
      body: "",
    };
  }

  changehandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h3>HTTP Request POST Method Implementation</h3>

        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.changehandler}
          />

          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.changehandler}
          />

          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.changehandler}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default HTTPRequestPost;
