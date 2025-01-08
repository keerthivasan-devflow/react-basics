import React from "react";

type NameProps = {
  names: {
    firstname: string;
    lastname: string;
  }[];
  musics: string[];
};

const ArrayProps = (props: NameProps) => {
  let favMusic = props.musics.map((music) => <li>{music}</li>);
  return (
    <div style={{ textAlign: "left" }}>
      <h3>Array Props Component....</h3>
      {props.names.map((name) => {
        return (
          <ul>
            <li>FirstName: {name.firstname}</li>
            <li>Lastname : {name.lastname}</li>
            {favMusic}
          </ul>
        );
      })}
    </div>
  );
};

export default ArrayProps;
