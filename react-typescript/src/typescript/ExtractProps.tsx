import React from "react";
import BasicProps from "./BasicProps";

// export const ExtractProps = (props: React.ComponentProps<typeof BasicProps>)=>{
//     return (
//         <div>
//             <h1>Name: {props.name} </h1>
//             <h1>Age : {props.age} </h1>
//         </div>
//     )
// }

type TextProps = {
  as: React.ElementType;
  children: string;
};

export const ExtractProps = (props: TextProps) => {
  const Component = props.as || "div";
  return <Component>{props.children}</Component>;
};
