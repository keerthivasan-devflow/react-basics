import React from "react";

type GreetProps = {
  name: string;
  age: number;
  isPresented: boolean;
  email?: string;
};

const BasicProps = (props: GreetProps) => {
  let { email = null } = props;
  return (
    <div>
      <h1>Basic Props Component</h1>
      {props.isPresented ? (
        <div>
          <h3>My name is {props.name}</h3>
          <h3>My age is {props.age}</h3>
          {email !== null && <h3>My email is {email}</h3>}
        </div>
      ) : (
        <div>
          <h1>Error Ocurred!</h1>
        </div>
      )}
    </div>
  );
};

export default BasicProps;

// import PropTypes from "prop-types";

// MyComponent.propTypes = {
//   status: PropTypes.oneOf(["loading", "success", "error"]).isRequired,
// };

