import React from "react";


type StyleContainer = {
  styles: React.CSSProperties;
};

const StyleProps = (props: StyleContainer) => {
  return (
    <div style={props.styles}>
      <h3>Style Props Component...</h3>
    </div>
  );
};

export default StyleProps;
