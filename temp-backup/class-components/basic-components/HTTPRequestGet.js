import React, { Component } from "react";
import axios from "axios";

class HTTPRequestGet extends Component {
  constructor() {
    super();
    // Here initializing the empty array in the state called "posts[]" in order to 
    // store the response/data retrieved from the server, after successful completion of making an HTTP GET Request
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //After retrieving the reponses from the server, the empty post array will be filled with the retrieved data.
        //so basically updating the state would be done by setState method, so it called and updated the state.
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    //Destructuring the states here.
    const users = this.state.posts;
    //Now the users variable holds the array of posts - so need to iterate over each data in the array.
    const result = users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Fetching Data throuh API calls</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{result}</tbody>
        </table>
      </div>
    );
  }
}

export default HTTPRequestGet;
