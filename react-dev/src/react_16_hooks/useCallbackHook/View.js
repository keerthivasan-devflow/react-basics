import React from "react";

const View = ({ text, count }) => {
  console.log(`${text} is clicked, this is the ${count}`);
  return (
    <p>
      {text}- {count}
    </p>
  );
};

export default React.memo(View);
// export default Click;
