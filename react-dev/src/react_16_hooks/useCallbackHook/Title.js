import React from "react";

const Title = () => {
  console.log("Title Component...");
  return <h1 className="font-semibold text-center text-xl">Title Component</h1>;
};

export default React.memo(Title);
// export default Title;
