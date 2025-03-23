import React from "react";

const ChildrenComponent = React.memo(({ count }) => {
  console.log("Child Component");
  return <p className="text-center m-2">Child Component (Count) - {count}</p>;
});

export default ChildrenComponent;
