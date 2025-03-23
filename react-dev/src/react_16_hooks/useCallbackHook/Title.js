import React from "react";

const Title = () => {
  console.log("Title Component...");
  return <h1>Title Component</h1>;
};

export default React.memo(Title);
