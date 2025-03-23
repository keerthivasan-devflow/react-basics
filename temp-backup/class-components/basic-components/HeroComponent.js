import React from "react";

function HeroComponent({ hero }) {
  if (hero.toLowerCase() === "joker") throw new Error("Please enter a valid hero name!");
  return (
    <div>
      <h1>Hero Component</h1>
      <p><b>Name of the hero :</b> {hero}</p>
    </div>
  );
}

export default HeroComponent;
