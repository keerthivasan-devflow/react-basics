import React from "react";

const Click = ({ text, count }) => {
  console.log(`${text} is clicked, ${count} is this`);
  return (
    <div>
      {text} :{count}
    </div>
  );
};

export default React.memo(Click);
