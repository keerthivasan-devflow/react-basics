import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {(user) => {
            return <p>{user.loggedInUser}</p>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
