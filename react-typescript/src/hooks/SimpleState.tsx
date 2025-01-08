import React, { useState } from "react";

const SimpleState = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean | number>(false);

  const handleLoggedIn = () => {
    setLoggedIn(true);
  };

  const handleLoggedOut = () => {
    setLoggedIn(0);
  };

  return (
    <div>
      <h3>Simple State Hook Component...</h3>

      <button onClick={handleLoggedIn}>Login</button>
      <button onClick={handleLoggedOut}>Log out</button>
      <br />
      {isLoggedIn ? "Logged In" : "Logged Out"}
    </div>
  );
};

export default SimpleState;
